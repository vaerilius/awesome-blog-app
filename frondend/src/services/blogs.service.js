import axios from 'axios'
import { async } from 'q'
const baseUrl = '/api/blogs'

let token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhYSIsImlkIjoiNWQ4YzYxYzZkODE4NGYyZDY0NjRjY2NjIiwiaWF0IjoxNTY5NDgxMTg3fQ.KOs-1vucwpQou25B5hQZY1CSxo76X1dV3jxvfEY1QxM'
const getConfig = () => ({
  headers: { Authorization: token }
})

const getAll = async () => {
  const blogs = await axios.get(baseUrl)
  return blogs.data
}

const addBlog = async (blog) => {
  const createdBlog = await axios.post(baseUrl, blog, getConfig() )
  return createdBlog.data
}

const updateBlog = async (id, blog) => {
  const updatedBlog = await axios.put(`${baseUrl}/${id}`, blog)
  return updatedBlog.data
}
const removeBlog = async (id) => {
  const reponse = await axios.delete(`${baseUrl}/${id}`, getConfig())
  return reponse
}

export default {
  getAll,
  addBlog,
  updateBlog,
  removeBlog
}