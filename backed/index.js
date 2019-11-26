const app = require('./app')
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)
const io = require('socket.io')(server)

io.on('connection', (socket)=>{
  console.log('a user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  socket.on('change', (data) => {
    console.log(data)
      io.sockets.emit('init', 'initialize app')
  })

})

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})

