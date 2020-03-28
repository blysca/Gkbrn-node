const https = require('https')
const request = require('request')
const nodemailer = require('nodemailer')
const http2 = require('http2')
const http = require('http')
const cheerio = require('cheerio')

request('https://www.rbc.ru/', (err, response, html) => {
  console.log('bbbb')

  if(! err && response.statusCode === 200) {
    const $ = cheerio.load(html)
    console.log($('.indicators__td.indicators__sum'))
  }
})


/*
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('Hell world')
  res.end()
}).listen(8888)
*/

/*
const smtpTransport = nomedailer.createTransport('SMTP',{
  service: 'GMail',
  auth {
    user: 'bububu@gmail.com',
    pass: 'myPass'
  }
})

smtpTransport.sendMail({
  from: 'Vasya Pyp <bubub@gmail.com>',
  to: 'Kolya Petrov <petrovk@gmail.com>'
  subject: 'Bububu Hello Paren',
  text: 'Hello paren',
  html: 'Hello, <b>paren</b>'
}, (err, response) => {
  if (err) {
    throw err;
  } else {
    console.log('Message sent')
  }
  smtpTransport.close();
})
*/

/*
request('http://google.com', (err, response, body)=> {
  if (err){
    throw err;
  }

  console.log(body)
})
*/
/*
https.get('https://google.com', (res) => {
  console.log('res: ', res.statusCode)
}).on('error', (e) => {
  console.error('Error: ', e)
})
*/
/*
https.request({
  hostname: 'google.com',
  port: 0,
  path: '/users',
  method: 'POST'
}, (res) => {
  console.log('RES: ', res.statusCode)
}).on('error', (e) =>{
  console.log('ERROR: ', e)
})
*/
