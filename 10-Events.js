
/*
///////////Events emitter

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'Kiah', 19)
*/
///////////request events

const http = require('http')

const server = http.createServer()
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)