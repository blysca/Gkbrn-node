const minimist = require('minimist')
const readline = require('readline')
const fs = require('fs')

// Async
/*
fs.exists('package.json', (exists)=>{
  if (exists) {
    fs.readFile('./package.json', (err, data) => {
      console.log('data: ', data.toString())
    })
  }
})
*/

//Sync
const exists = fs.existsSync('package.json')
if (exists) {
  const data = fs.readFileSync('./package.json')
  console.log('dataSync: ', data.toString())
}


//console.log(minimist(process.argv.slice(2), {alias: {o: 'optimal'}}))

//console.log(process.env)


// input/output
/*
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (line) => {
  console.log('You typed %s', line)

  if(line === 'exit') {
    rl.close()
  }

})
*/
