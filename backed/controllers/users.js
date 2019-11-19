const bcrypt = require('bcrypt')
const multer = require('multer')
const uuidv4 = require('uuid/v4')
const multerS3 = require('multer-s3');
const usersRouter = require('express').Router()
const User = require('../models/user')
const AWS = require('../utils/aws-config');

let imageName= ''

const upload = multer({
  fileFilter: AWS.fileFilter,
  storage: multerS3({
     acl: 'public-read',
    s3: AWS.s3,
    bucket: process.env.AWS_BUCKET_NAME,
    // metadata: function (req, file, cb) {
    //   cb(null, Object.assign({}, req.body));
    // },
    contentType : multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      console.log(file.mimetype.split('/')[1])
      imageName = 'users/' + uuidv4() + '-' + file.originalname.toLowerCase().split(' ').join('-');
     cb(null, imageName)
    }
  })
});

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({}).populate('blogs',
      { url: 1, title: 1, likes: 1, comments: 1, id: 1, description: 1 })
  response.json(users.map(u => u.toJSON()))
})

usersRouter.post('/', upload.single('profileImg'), async (request, response, next) => {


  try {
    const body = request.body

    if (!body.username || body.username.length < 4) {
      return response.status(400).send({
        error: 'username minimum length 4'
      })
    }
    if (!body.password || body.password.length < 4) {
      return response.status(400).send({
        error: 'pasword minimum length 4'
      })
    }
    // if (!request.file) {
    //   return response.status(400).send({
    //     error: 'picture is required'
    //   })
    // }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
    const user = new User({
      username: body.username,
      name: body.name,
      picture: `${process.env.AWS_UPLOADED_FILE_URL_LINK}/${imageName}`,
      password: body.password,
      passwordHash,
      blogs: body.blogs
    })
    console.log(user)

    const savedUser = await user.save()
    response.json(savedUser)
  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter