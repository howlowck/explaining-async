var puts = require('./lib/puts')
var callbackGets = require('./lib/gets')

function gets () {
  return new Promise(callbackGets)
}

async function program () {
  puts('Enter your name: ')
  var name = await gets()
  puts('Name: ' + name)
  puts('Enter your Email: ')
  var email = await gets()
  puts('Email: ' + email)
  puts('Enter your Phone: ')
  var phone = await gets()
  puts('Phone: ' + phone)
  puts('Enter your Birth Date: ')
  var date = await gets()
  puts('Date: ' + date)
}

program()
