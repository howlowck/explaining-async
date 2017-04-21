var puts = require('../lib/puts')
var gets = require('../lib/gets')

var requestName = new Promise(function (resolve) {
  puts('Enter Your Name: ')
  gets(function (name) {
    resolve(name)
  })
})

requestName.then(function (message) {
  console.log(message)
})
