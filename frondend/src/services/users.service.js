import axios from 'axios'
const baseUrl = 'https://calm-reaches-63250.herokuapp.com/api/users'
// const baseUrl = '/api/users'

const signUpUser = async (userData) => {
  const response = await axios.post(baseUrl, userData)
  return response.data
}
const getAllUsers = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { signUpUser, getAllUsers }
