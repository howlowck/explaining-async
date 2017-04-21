var puts = require('./lib/puts')
var gets = require('./lib/gets')

function requestName () {
  return new Promise(function (resolve, reject) {
    puts('Enter Your Name: ')
    gets(function (name) {
      resolve(name)
    })
  })
}

function requestEmail () {
  return new Promise(function (resolve, reject) {
    puts('Enter Your Email: ')
    gets(function (email) {
      resolve(email)
    })
  })
}

function requestPhone () {
  return new Promise(function (resolve, reject) {
    puts('Enter Your Phone: ')
    gets(function (phone) {
      resolve(phone)
    })
  })
}

function requestBirthDate () {
  return new Promise(function (resolve, reject) {
    puts('Enter Your Birth Date: ')
    gets(function (phone) {
      resolve(phone)
    })
  })
}

requestName() // a Promise (which has a then method)
  .then(function (name) {
    puts('Name: ' + name)
  })  // then method always return a new Promise
  .then(requestEmail)
  .then(function (email) {
    puts('Email: ' + email)
  })
  .then(requestPhone)
  .then(function (phone) {
    puts('Phone: ' + phone)
  })
  .then(requestBirthDate)
  .then(function (birthDate) {
    puts('Birth Date: ' + birthDate)
  })
