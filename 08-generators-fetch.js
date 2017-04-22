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
    .then(function (data) {
      return data.name
    })
}

function * program () {
  puts('Enter your name: ')
  var name = yield requestName()
  puts('Fetch from Server...')
  var burgerName = yield fetchRandomBurgerName()
  puts(name + ' wants a ' + burgerName)
}

runs(program)

// async function program () {
//   puts('Enter your name: ')
//   var name = await requestName()
//   puts('Fetch from Server...')
//   var burgerName = await fetchRandomBurgerName()
//   puts(name + ' wants a ' + burgerName)
// }

// program()
