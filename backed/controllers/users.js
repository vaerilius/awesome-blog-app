const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
    const users = await User
    .find({}).populate('blogs',
     { url: 1, title: 1, likes: 1, comments: 1, id: 1, description: 1 })
    response.json(users.map(u => u.toJSON()))
  })

usersRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body

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
      picture: body.picture,
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