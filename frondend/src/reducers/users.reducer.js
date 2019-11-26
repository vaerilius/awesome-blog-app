
import usersService from '../services/users.service'
import { setNotification } from './notification.reducer'
import io from 'socket.io-client'

const socket = io('https://calm-reaches-63250.herokuapp.com/')

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_USERS':
      return [...action.users]
    case 'SIGNUP_USER':
      return [...state, action.createdUser]
    default:
      return state
  }
}

export const initializeUsers = () => {
  return async dispatch => {
    const users = await usersService.getAllUsers()
    dispatch({
      type: 'INIT_USERS',
      users
    })
  }
}
export const signUp = (userData) => {
  return async dispatch => {
    try {
      const createdUser = await usersService.signUpUser(userData)
      dispatch({
        type: 'SIGNUP_USER',
        createdUser
      })
      dispatch(setNotification({ message: 'sign up succeed', class: 'ui positive message' }))
      socket.emit('change', createdUser)

    } catch (error) {
      console.log(error.message)
      dispatch(setNotification({ message: 'validation error', class: 'ui negative message' }))
    }
  }
}

export default reducer