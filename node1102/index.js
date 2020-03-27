const ansi = require('ansi')
var colors = require('colors');
 
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
 
const cursor = ansi(process.stdout)
cursor.beep()

// outputs red text
console.log("this is an error".error);
 
// outputs yellow text
console.log("this is a warning".warn);
console.log("this is a warning".silly);