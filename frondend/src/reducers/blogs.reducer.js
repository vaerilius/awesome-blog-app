import blogService from '../services/blogs.service'
import { setNotification } from './notification.reducer'
// import { initializeUsers } from './users.reducer'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOGS':
      return [...action.blogs]
    case 'ADD_BLOG':
      return [...state, action.blog]
    case 'LIKE_BLOG':
      return state.map(blog => blog.id === action.data.id ? action.data : blog)
    case 'REMOVE_BLOG':
      return state.filter(blog => blog.id !== action.id)
    case 'COMMENT_BLOG':
      return [...state]
        .map(blog => blog.id !== action.blog.id ? blog : action.blog)
    default:
      return state
  }
}
export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      blogs
    })
  }
}

export const onLikeBlog = (blog, userID) => {
  return async dispatch => {

    try {
      const newBlog = { ...blog, likes: blog.likes + 1, user: userID }
      console.log(newBlog);
      const updatedBlog = await blogService.updateBlog(blog.id, newBlog)
      dispatch({
        type: 'LIKE_BLOG',
        data: updatedBlog
      })
      dispatch(setNotification({ message: `blog: ${newBlog.title} just liked`, class: 'ui positive message' }))
    } catch (error) {
      dispatch(setNotification({ message: 'something went wrong', class: 'ui negative message' }))
    }
  }
}

export const onAddBlog = (data) => {
  return async dispatch => {
    try {
      const blog = await blogService.addBlog(data)
      dispatch({
        type: 'ADD_BLOG',
        blog
      })
      dispatch(setNotification({ message: `blog: ${blog.title} just added`, class: 'ui positive message' }))
      // dispatch(initializeUsers())
    } catch (error) {
      dispatch(setNotification({ message: error.message, class: 'ui negative message' }))
    }
  }
}
export const onRemoveBlog = (id) => {
  return async dispatch => {
    try {
      await blogService.removeBlog(id)
      dispatch({
        type: 'REMOVE_BLOG',
        id
      })
      dispatch(setNotification({ message: `blog with id: ${id} just removed`, class: 'ui positive message' }))
    } catch (error) {
      dispatch(setNotification({ message: error.message, class: 'ui negative message' }))
    }
  }
}
export const onAddComment = (comment, id) => {
  return async dispatch => {
    try {
      const blog = await blogService.commentBlog(comment, id)
      dispatch({
        type: 'COMMENT_BLOG',
        blog
      })
      dispatch(setNotification({ message: `blog: ${blog.title} just commented`, class: 'ui positive message' }))

    } catch (error) {
      dispatch(setNotification({ message: error.message, class: 'ui negative message' }))
    }
  }
}

export default reducer