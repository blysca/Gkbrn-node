var translate = require('node-google-translate-skidz');

translate({
  text: 'text',
  source: 'en',
  target: 'ru'
}, function(result) {
  console.log(result);
});