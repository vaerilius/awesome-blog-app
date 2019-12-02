import blogService from '../services/blogs.service'
import { setNotification } from './notification.reducer'
import io from 'socket.io-client'

const socket = io('https://calm-reaches-63250.herokuapp.com/')

// Blogs reducer hoitaa blogeihin liittyvät toiminnallisuudet
// alla oleva reducer hoitaa tilanmuuttumiset sovellukselle. 
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOGS':
      return [...action.blogs]
    case 'ADD_BLOG':
      return [...state, action.blog]
    case 'LIKE_BLOG':
      return [...state].map(blog => blog.id === action.data.id ? action.data : blog)
    case 'REMOVE_BLOG':
      return state.filter(blog => blog.id !== action.id)
    case 'COMMENT_BLOG':
      return [...state]
        .map(blog => blog.id !== action.blog.id ? blog : action.blog)
    default:
      return state
  }
}

// alla olevat functiot ovat action creatoreja, joita react sovellus voi hyödyntää.
// Exportataan function, joka paluttaa redux-storen dispatch metodin asynkronisena
// eli functio odottaa awaitin ennenkuin palauttaa dispatchin.

// alustetaan blogit hyödyntäen blogServicen funtionia getAll() ja välitetään saatu data reducerille,
// joka muuttaa blogien tilan
export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()

    dispatch({
      type: 'INIT_BLOGS',
      blogs
    })
  }
}


// Blogin tykkäämisen toiminnallisuus ja notification. Lähetään muutos myös socket.io,
// joka välittää backendista muutoksen kaikille käyttäjille
export const onLikeBlog = (blog, userID) => {
  return async dispatch => {

    try {
      const newBlog = { ...blog, likes: blog.likes + 1, user: userID }
      const updatedBlog = await blogService.updateBlog(blog.id, newBlog)
      socket.emit('change', updatedBlog)
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

// uuden blogin luonti ja toiminnallisuus,
export const onAddBlog = (data) => {

  return async dispatch => {

    try {
      const blog = await blogService.addBlog(data)

      socket.emit('change', blog)

      dispatch({
        type: 'ADD_BLOG',
        blog
      })
      dispatch(setNotification({ message: `blog: ${blog.title} just added`, class: 'ui positive message' }))
      // socket.on('init', (data) => {
      //   console.log(data)
      //   dispatch(initializeBlogs())
      // })
    } catch (error) {
      dispatch(setNotification({ message: error.message, class: 'ui negative message' }))
    }
  }
}
// blogin poisto ja toiminnallisuus
export const onRemoveBlog = (id) => {
  return async dispatch => {
    try {
      await blogService.removeBlog(id)
      socket.emit('change', 'blog removed')

      dispatch({
        type: 'REMOVE_BLOG',
        id
      })
      dispatch(setNotification({ message: `blog with id: ${id} just removed`, class: 'ui positive message' }))
      // socket.emit('onChange', 'blog removed')
      // socket.on('init', (data) => {
      //   console.log(data)
      //   dispatch(initializeBlogs())
      // })


    } catch (error) {
      dispatch(setNotification({ message: error.message, class: 'ui negative message' }))
    }
  }
}
// blogin kommentoinnin toiminnallisuus
export const onAddComment = (comment, id) => {
  return async dispatch => {
    try {
      const blog = await blogService.commentBlog(comment, id)
      socket.emit('change', blog)

      dispatch({
        type: 'COMMENT_BLOG',
        blog
        // })
      })

      dispatch(setNotification({ message: `blog: ${blog.title} just commented`, class: 'ui positive message' }))

    } catch (error) {
      dispatch(setNotification({ message: error.message, class: 'ui negative message' }))
    }
  }
}

export default reducer