var runs = require('./lib/runs')
var fetch = require('node-fetch')
var gets = require('./lib/gets')
var puts = require('./lib/puts')
var apiRoute = 'https://bobsburger-names.azurewebsites.net/api/random'

function requestName () {
  return new Promise(gets)
}

function fetchRandomBurgerName () {
  return fetch(apiRoute)
    .then(function (res) {
      return res.json()
    })
}

function getName (resObject) {
  return resObject.name
}

// puts('Enter your name: ')
// var name
// requestName()
//   .then(function (personName) {
//     puts('Fetch from Server...')
//     name = personName
//     return fetchRandomBurgerName()
//   })
//   .then(function (burgerNameObject) {
//     var burgerName = getName(burgerNameObject)
//     puts(name + ' wants a ' + burgerName)
//   }).catch(err => console.log(err.message))

function * program () {
  puts('Enter your name: ')
  var name = yield requestName()
  puts('Fetch from Server...')
  var burgerNameObject = yield fetchRandomBurgerName()
  var burgerName = getName(burgerNameObject)
  puts(name + ' wants a ' + burgerName)
}
runs(program)

// async function program () {
//   puts('Enter your name: ')
//   var name = await requestName()
//   puts('Fetch from Server...')
//   var burgerNameObject = await fetchRandomBurgerName()
//   var burgerName = getName(burgerNameObject)
//   puts(name + ' wants a ' + burgerName)
// }

// program()
