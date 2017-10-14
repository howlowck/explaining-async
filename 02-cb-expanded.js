var puts = require('./lib/puts')
var gets = require('./lib/gets')

puts('Enter your name: ')
gets(function (name) {
  puts('Name: ' + name)
  puts('Enter your email: ')
  gets(function (email) {
    puts('Email: ' + email)
    puts('Enter your phone number: ')
    gets(function (phone) {
      puts('Phone: ' + phone)
      puts('Enter your birth date: ')
      gets(function (birthDate) {
        puts('Birth Date: ' + birthDate)
      })
    })
  })
})

// console output: http://g.recordit.co/puIt9Qvhem.gif
