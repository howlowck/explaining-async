var puts = require('./lib/puts')
var callbackGets = require('./lib/gets')

function requestName () {
  return new Promise(function (resolve, reject) {
    callbackGets(function (name) {
      resolve(name)
    })
  })
}

function requestEmail () {
  return new Promise(function (resolve, reject) {
    callbackGets(function (email) {
      resolve(email)
    })
  })
}

function requestPhone () {
  return new Promise(function (resolve, reject) {
    callbackGets(function (phone) {
      resolve(phone)
    })
  })
}

function requestBirthDate () {
  return new Promise(function (resolve, reject) {
    callbackGets(function (birthDate) {
      resolve(birthDate)
    })
  })
}

function * program () {
  puts('Enter Your Name: ')
  var name = yield requestName()
  puts('Name: ' + name)

  puts('Enter Your Email: ')
  var email = yield requestEmail()
  puts('Email: ' + email)

  puts('Enter Your Phone: ')
  var phone = yield requestPhone()
  puts('Phone: ' + phone)

  puts('Enter Your Birth Date: ')
  var date = yield requestBirthDate()
  puts('Birth Date: ' + date)
}

var running = program() // returns an iterator object

running.next() // {done: false, value: Promise} (Promise has a then method)
  .value
  .then(function (name) {
    running.next(name)
      .value
      .then(function (email) {
        running.next(email)
          .value
          .then(function (phone) {
            running.next(phone)
              .value
              .then(function (birthDate) {
                running.next(birthDate)
              })
          })
      })
  })
