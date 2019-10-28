const app = require('./app')
const http = require('http')
const config = require('./utils/config')
// const socket = require('socket.io')

const server = http.createServer(app)

// const io = socket(server)

// io.on('connection', (socket) => {
//   console.log(socket.id);

//   socket.on('SEND_MESSAGE', function(data){
//     io.emit('RECEIVE_MESSAGE', data);
// })

// });


server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})

// module.exports =  {
//   io
// }