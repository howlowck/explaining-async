var puts = require('./lib/puts')
var callbackGets = require('./lib/gets')

// function requestName () {
//   return new Promise(function (resolve, reject) {
//     callbackGets(function (name) {
//       resolve(name)
//     })
//   })
// }

// function requestEmail () {
//   return new Promise(function (resolve, reject) {
//     callbackGets(function (email) {
//       resolve(email)
//     })
//   })
// }

// function requestPhone () {
//   return new Promise(function (resolve, reject) {
//     callbackGets(function (phone) {
//       resolve(phone)
//     })
//   })
// }

// function requestBirthDate () {
//   return new Promise(function (resolve, reject) {
//     callbackGets(function (birthDate) {
//       resolve(birthDate)
//     })
//   })
// }

function gets () {
  return new Promise(function (resolve, reject) {
    callbackGets(function (data) {
      resolve(data)
    })
  })
}

// function gets () {
//   return new Promise(function (resolve) {
//     callbackGets(resolve)
//   })
// }

// function gets () {
//   return new Promise(callbackGets)
// }

function * program () {
  puts('Enter your Name: ')
  var name = yield gets()
  puts('Name: ' + name)
  puts('Enter your Email: ')
  var email = yield gets()
  puts('Email: ' + email)
  puts('Enter your Phone: ')
  var phone = yield gets()
  puts('Phone: ' + phone)
  puts('Enter your Birth Date: ')
  var date = yield gets()
  puts('Birth Date: ' + date)
}

function run (generatorFunc) {
  var iterator = generatorFunc() // iterator object
  var yieldedObject

  function loop (resolvedValue) { // undefined-> name -> email -> phone -> birthDate
    yieldedObject = iterator.next(resolvedValue) // {done: false, value: Promise}
    if (!yieldedObject.done) {
      yieldedObject.value.then(loop)
    }
  }

  loop() // start the loop
}

run(program)
