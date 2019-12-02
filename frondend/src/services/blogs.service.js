import axios from 'axios'
const baseUrl = 'https://calm-reaches-63250.herokuapp.com/api/blogs'
// const baseUrl = '/api/blogs'

let token = null

// blog service hoitaa kommunikoinnin backendin kanssa,
// sekä token perusteisen tunnistautumisen

const setToken = newToken => {
  token = `bearer ${newToken}`
}
const getConfig = () => ({
  headers: { Authorization: token }
})
const destroyToken = () => {
  token = null
}
const getAll = async () => {
  const blogs = await axios.get(baseUrl)
  return blogs.data
}
const addBlog = async (blog) => {
  const createdBlog = await axios.post(baseUrl, blog, getConfig())
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
const commentBlog = async (comment, id) => {
  const response = await axios.put(`${baseUrl}/${id}/comments`, comment, getConfig())
  return response.data
}

export default {
  getAll,
  addBlog,
  updateBlog,
  removeBlog,
  commentBlog,
  setToken,
  destroyToken
}