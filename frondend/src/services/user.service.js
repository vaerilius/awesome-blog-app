import axios from 'axios'
const baseUrl = 'https://calm-reaches-63250.herokuapp.com/api/login'
// const baseUrl = '/api/login'

// kirjautuminen sovellukseen, saa onnistuessaan tokenin backendistä

const login = async (loginData) => {
  const response = await axios.post(baseUrl, loginData)
  return response.data
}
export default { login }