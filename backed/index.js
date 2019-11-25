const app = require('./app')
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)
const io = require('socket.io')(server)

// const io = socket(server)

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('connected', 'user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // socket.on('test', (data) =>{
  //   console.log(data);
  //   socket.emit('receive', data );
  // });
    socket.on('onChange', (data) => {
      console.log(data)
    socket.emit('init', 'init application' );
  });
setInterval(() => {
  socket.emit('init', 'init application' );
  
}, 10000);



});


server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})

module.exports = {
  io
}