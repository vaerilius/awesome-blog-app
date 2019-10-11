import blogService from '../services/blogs.service'

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
    await blogService.removeBlog(id)

    dispatch({
      type: 'REMOVE_BLOG',
      id
    })
  }
}
export const onAddComment = (comment, id) => {
  return async dispatch => {
    const blog = await blogService.commentBlog(comment, id)
    dispatch({
      type: 'COMMENT_BLOG',
      blog
    })
  }
}

export default reducer