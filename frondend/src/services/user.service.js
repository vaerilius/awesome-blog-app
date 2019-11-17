import axios from 'axios'
// const baseUrl = 'https://stark-ocean-35945.herokuapp.com/api/login'
const baseUrl = '/api/login'

const login = async (loginData) => {
  const response = await axios.post(baseUrl, loginData)
  return response.data
}
export default { login }