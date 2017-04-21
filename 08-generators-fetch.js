var runs = require('./lib/runs')
var fetch = require('node-fetch')
var gets = require('./lib/gets')
var puts = require('./lib/puts')
var apiRoute = 'https://bobsburger-names.azurewebsites.net/api/random'

function requestName () {
  return new Promise(function (resolve) {
    gets(resolve)
  })
}

function fetchRandomBurger () {
  var fetchRequest = fetch(apiRoute)

  return fetchRequest
    .then(function (res) {
      return res.json()
    })
}

function getBurgerName (obj) {
  return obj.name
}

function * program () {
  puts('Enter your name: ')
  var name = yield requestName()
  puts('Fetch from Server...')
  var burgerObj = yield fetchRandomBurger()
  var burgerName = getBurgerName(burgerObj)
  puts(name + ' wants a ' + burgerName)
}

runs(program)
