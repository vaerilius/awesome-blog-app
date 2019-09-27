require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'development') {
  MONGODB_URI = process.env.DEVELOPMENT_MONGODB_URI
}

module.exports = {
  MONGODB_URI,
  PORT
}