var fetch = require('node-fetch')
var puts = require('../lib/puts')
var gets = require('../lib/gets')

puts('convert US Dollar to Euros')
gets(function (value) {
  var input = parseFloat(value)
  puts('looking up conversation rate: ')
  fetch('http://api.fixer.io/latest?base=USD')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    puts('that is EUR ' + input * parseFloat(data.rates.EUR))
  })
})
