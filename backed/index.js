const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const socket = require('socket.io')

const server = http.createServer(app)

const io = socket(server)

io.on('connection', (socket) => {
  console.log('a user connected');
  setInterval(() => {
    socket.emit('connection', 'initialize blogs')
  }, 10000);
 
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});


server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})

module.exports =  {
  io
}