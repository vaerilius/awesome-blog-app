
import usersService from '../services/users.service'
const reducer = (state = null, action) => {
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
    const createdUser = await usersService.signUpUser(userData)
    console.log(createdUser)
    dispatch({
      type: 'SIGNUP_USER',
      createdUser
    })

  }
}

export default reducer