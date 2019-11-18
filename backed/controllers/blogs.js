const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const uuidv4 = require('uuid/v4')

const DIR = './blogs/'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName)
  }
})
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
})



blogsRouter.get('/', async (request, response, next) => {
  const blogs = await Blog.find({})
    .populate('user', { username: 1, name: 1, picture: 1 })
    .populate('comments', { comment: 1, user: 1 })
    .populate('usersLiked', {  username: 1, name: 1, picture: 1 })

  response.json(blogs.map(blog => blog.toJSON()))


})
// blogsRouter.get('/:id', async (request, response, next) => {

//   try {
//     const blog = await Blog.findById(request.params.id)
//     if (blog) {
//       response.json(blog.toJSON())
//     } else {
//       response.status(404).end()
//     }
//   } catch (error) {
//     next(error)
//   }

// })

blogsRouter.post('/', upload.single('blogImage'), async (request, response, next) => {
  const url = request.protocol + '://' + request.get('host')
  const body = request.body
  console.log(request.file);
  console.log(request.body);

  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!request.token || !decodedToken.id) {
      response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
      title: body.title,
      description: body.description,
      url: url + '/blogs/' + request.file.filename,
      likes: 0,
      user: user,
      usersLiked: []
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
      // user.blogs
      response.status(204).end()
    }

  } catch (error) {
    next(error)
  }

})
blogsRouter.put('/:id', async (request, response, next) => {
  const body = request.body
  let findedBlog = await Blog.findById(request.params.id)

  const blog = {
    title: body.title,
    description: body.description,
    url: body.url,
    likes: body.likes,
    usersLiked: findedBlog.usersLiked.concat(body.user)
  }

  try {
    
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
      .populate('user', { username: 1, name: 1, picture: 1 })
      .populate('comments', { comment: 1, user: 1 })

    response.json(updatedBlog.toJSON())
  } catch (error) {
    next(error)
  }
})

blogsRouter.post('/:id/comments', async (request, response, next) => {
  //https://docs.mongodb.com/manual/reference/operator/update/push/
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, { $push: { comments: request.body } }, { new: true })
      .populate('user', { username: 1, name: 1, picture: 1 })
      .populate('comments', { comment: 1, user: 1 })

    response.json(updatedBlog.toJSON())

  } catch (error) {
    next(error)
  }

})

module.exports = blogsRouter

