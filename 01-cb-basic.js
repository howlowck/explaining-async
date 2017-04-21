var puts = require('./lib/puts')
var gets = require('./lib/gets')

puts('Enter your name: ')
gets(function (name) {
  puts('Name: ' + name)
})

// console output: http://g.recordit.co/puIt9Qvhem.gif
