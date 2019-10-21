const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const socket = require('socket.io')

const server = http.createServer(app)
const io = socket(server)

io.on("connection", socket => {
  socket.on("REQUESTING_NEW_TIME", function(data) {
    let number = 0;
    setInterval(() => {
      socket.emit("test", time(number));
      number++;
    }, 1000);
  });
});

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})