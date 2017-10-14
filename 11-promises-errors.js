var puts = require('./lib/puts')
var gets = require('./lib/gets')

function requestName () {
  return new Promise(function (resolve, reject) {
    puts('Enter Your Name: ')
    gets(function (name) {
      if (name === '') {
        reject(Error('Your response cannot be empty'))
      }
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
  .catch(function (err) {
    puts('Name Error Caught: ', err.message)
  })
  .then(requestEmail)
  .then(function (email) {
    puts('Email: ' + email)
  })
  .catch(function (err) {
    puts('Email Error Caught: ', err.message)
  })
  .then(requestPhone)
  .then(function (phone) {
    puts('Phone: ' + phone)
  })
  .catch(function (err) {
    puts('Phone Error Caught: ', err.message)
  })
  .then(requestBirthDate)
  .then(function (birthDate) {
    puts('Birth Date: ' + birthDate)
  })
  .catch(function (err) {
    puts('Birth Error Caught: ', err.message)
  })
