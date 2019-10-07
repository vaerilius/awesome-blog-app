import blogsService from '../services/blogs.service'
import userService from '../services/user.service'

const reducer = (state = null, action) => {

  switch (action.type) {
    case 'INIT_USER':
      return action.user
    case 'LOGIN_USER':
      return action.user
    case 'LOGOUT_USER':
      return null
    default:
      return state
  }
}
export const initializeUser = () => {
  return async dispatch => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if (user) {
      blogsService.setToken(user.token)
      dispatch({
        type: 'INIT_USER',
        user: user
      })
    } else {
      dispatch({
        type: 'INIT_USER',
        user: null
      })
    }
  }
}
export const login = (loginData) => {
  return async dispatch => {
    try {
      const user = await userService.login(loginData)

      if (user) {
        window.localStorage.setItem('user', JSON.stringify(user))
        blogsService.setToken(user.token)
        dispatch({
          type: 'LOGIN_USER',
          user: user
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const logout = () => {
  return async dispatch => {
    blogsService.destroyToken()
    window.localStorage.removeItem('user')
    dispatch({
      type: 'LOGOUT_USER'
    })
  }
}

export default reducer
