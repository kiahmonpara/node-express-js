/*

-----------JS is Synchronous and single threaded

console.log('first task')
console.time()
for (let i = 0; i < 10000000; i++) {
const h3=document.querySelector('h3')
h3.textContent = `Hey, everyone is waiting on me`
}
console.timeEnd()
console.log('next task')

/////////////////////////

console.log('first task')
setTimeout(() => {
  console.log('second task')
}, 0)
console.log('next task')

////////////////////

const { readFile, writeFile } = require('fs')
console.log('started a first task')
readFile('./first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')


/////////////////

setInterval(() => {
  console.log('hello world')
}, 2000)
console.log(`I will run first`)
*/

////////////////////

const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})