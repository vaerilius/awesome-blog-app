import blogService from '../services/blogs.service'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOGS':
      return [...action.blogs]
    case 'ADD_BLOG':
      return [...state, action.blog]
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
export const onAddBlog = (data) => {
  return async dispatch => {
  
    const blog = await blogService.addBlog(data)

    dispatch({
      type: 'ADD_BLOG',
      blog
    })



  
 
    
  }
}
      export default reducer