/*----sync
const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./first.txt', 'utf8')
const second = readFileSync('./second.txt', 'utf8')

writeFileSync(
  './result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')


-----async
*/

const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')