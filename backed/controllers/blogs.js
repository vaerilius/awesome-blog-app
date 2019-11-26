const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
// const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const uuidv4 = require('uuid/v4')
const multerS3 = require('multer-s3');
const AWS = require('../utils/aws-config');
let imageName = ''

const upload = multer({
  fileFilter: AWS.fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3: AWS.s3,
    bucket: process.env.AWS_BUCKET_NAME,
    // metadata: function (req, file, cb) {
    //   cb(null, Object.assign({}, req.body));
    // },
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      console.log(file.mimetype.split('/')[1])
      imageName = 'blogs/' + uuidv4() + '-' + file.originalname.toLowerCase().split(' ').join('-');
      cb(null, imageName)
    }
  })
})

blogsRouter.get('/', async (request, response, next) => {
  const blogs = await Blog.find({})
    .populate('user', { username: 1, name: 1, picture: 1 })
    .populate('comment', { comment: 1, user: 1 })
    .populate('usersLiked', { username: 1, name: 1, picture: 1 })
  // .populate('comment', {comment: 1 })


  response.json(blogs.map(blog => blog.toJSON()))

})
blogsRouter.get('/:id', async (request, response, next) => {

  try {
    const blog = await Blog.findById(request.params.id)
    if (blog) {
      response.json(blog.toJSON())
    } else {
      response.status(404).end()
    }
  } catch (error) {
    next(error)
  }
})

blogsRouter.post('/', upload.single('blogImage'), async (request, response, next) => {
  const body = request.body

  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!request.token || !decodedToken.id) {
      response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
      title: body.title,
      description: body.description,
      url: `${process.env.AWS_UPLOADED_FILE_URL_LINK}/${imageName}`,
      likes: 0,
      user: user
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog)
    await user.save()
    response.json(savedBlog.toJSON())
  } catch (error) {
    next(error)
  }
})

blogsRouter.delete('/:id', async (request, response, next) => {
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    const user = await User.findById(decodedToken.id)
    const blog = await Blog.findById(request.params.id)

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    } else if (blog.user.toString() !== user._id.toString()) {
      return response.status(401).json({ error: 'wrong token' })
    } else if (blog.user.toString() === user._id.toString()) {
      await Blog.deleteOne({ _id: request.params.id })
      response.status(204).end()
    }

  } catch (error) {
    next(error)
  }

})
blogsRouter.put('/:id', async (request, response, next) => {
  const body = request.body
  let findedBlog = await Blog.findById(request.params.id)

  findedBlog.usersLiked = findedBlog.usersLiked.concat(body.user)
  findedBlog.likes = body.likes

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, findedBlog, { new: true })
      .populate('user', { username: 1, name: 1, picture: 1 })
      .populate('comments', { comment: 1, user: 1 })
      .populate('usersLiked', { username: 1, name: 1, picture: 1 })

    response.json(updatedBlog.toJSON())
  } catch (error) {
    next(error)
  }
})

blogsRouter.put('/:id/comments', async (request, response, next) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, { $push: { comments: request.body } }, { new: true })
      .populate('user', { username: 1, name: 1, picture: 1 })
      .populate('usersLiked', { username: 1, name: 1, picture: 1 })
    // .populate('comments') 
    // not working
   
    response.json(updatedBlog.toJSON())

  } catch (error) {
    next(error)
  }
})

module.exports = blogsRouter

