import blogService from '../services/blogs.service'
import { async } from 'q'

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

export const onLikeBlog = blog => {
  return async dispatch => {

    const newBlog = { ...blog, likes: blog.likes + 1 }

    const updatedBlog = await blogService.updateBlog(blog.id, newBlog)
    dispatch({
      type: 'LIKE_BLOG',
      data: updatedBlog
    })
  }
}

export const onAddBlog = (data) => {
  return async dispatch => {
    const blog = await blogService.addBlog(data)
    dispatch({
      type: 'ADD_BLOG',
      blog
    })
  }
}
export const onRemoveBlog = (id) => {
  return async dispatch => {
   const response = await blogService.removeBlog(id)
   console.log(response)
   dispatch({
     type: 'REMOVE_BLOG',
     id
   })
  }
}



export default reducer