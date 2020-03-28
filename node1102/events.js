const {
  EventEmitter
} = require('events')


setTimeout(() => {
  console.log('setTimeout')
}, 0)
process.nextTick(()=>{
  console.log('process.nextTick')
})
setImmediate(()=>{
  console.log('setImmediate')
})

// class Kettle extends EventEmitter {
//   constructor() {
//     super()

//     setImmediate(()=>{
//       this.emit('created', {})
//     })
//   }


//   start() {
//     process.nextTick(()=>{
//       this.emit('started', {})
//     })

//     setTimeout(() => {
//       this.emit('ready', {})
//     }, 2000)
//   }
// }

// const k = new Kettle()

// k.start()
// k.on('created', () => {
//   console.log('Чайник CREATED')
// })
// k.on('started', () => {
//   console.log('Чайник STARTED')
// })
// k.on('ready', () => {
//   console.log('Чайник скипел')
// })