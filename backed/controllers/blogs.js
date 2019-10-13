const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

const jwt = require('jsonwebtoken')

blogsRouter.get('/', async (request, response, next) => {
    const blogs = await Blog.find({})
        .populate('user', { username: 1, name: 1, picture: 1 })
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

blogsRouter.post('/', async (request, response, next) => {

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
            author: body.author,
            url: body.url,
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

    const blog = {
        title: body.title,
        description: body.description,
        url: body.url,
        likes: body.likes,
    }

    try {
       const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
       .populate('user', { username: 1, name: 1, picture: 1 })
       response.json(updatedBlog.toJSON())
    } catch (error) {
        next(error)
    }
})

blogsRouter.post('/:id/comments', async (request, response, next) => {
    //https://docs.mongodb.com/manual/reference/operator/update/push/
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, { $push: { comments: request.body.comment } }, { new: true })
        .populate('user', { username: 1, name: 1, picture: 1 })
       response.json(updatedBlog.toJSON())
 
    } catch (error) {
        next(error)
    }

})

module.exports = blogsRouter

