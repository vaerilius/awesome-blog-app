const bcrypt = require('bcrypt')
const multer = require('multer')
const uuidv4 = require('uuid/v4')
const usersRouter = require('express').Router()
const User = require('../models/user')

const DIR = './users/';

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


usersRouter.get('/', async (request, response) => {
    const users = await User
    .find({}).populate('blogs',
     { url: 1, title: 1, likes: 1, comments: 1, id: 1, description: 1 })
    response.json(users.map(u => u.toJSON()))
  })

usersRouter.post('/', upload.single('profileImg'), async (request, response, next) => {
  const url = request.protocol + '://' + request.get('host')
  try {
    const body = request.body
      console.log(request.file);
  console.log(request.body);
    // if (!body.username || body.username.length < 4 ) {
    //   return response.status(400).send({
    //     error: 'username minimum length 4'
    //   })
    // }
    // if (!body.password || body.password.length < 4 ) {
    //   return response.status(400).send({
    //     error: 'pasword minimum length 4'
    //   })
    // }
    // if (!body.picture ) {
    //   return response.status(400).send({
    //     error: 'picture is required'
    //   })
    // }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      name: body.name,
      picture: url + '/users/' + request.file.filename,
      password: body.password,
      passwordHash,
      blogs: body.blogs
    })

    const savedUser = await user.save()
    response.json(savedUser)
  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter