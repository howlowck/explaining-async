var runs = require('./lib/runs')
var axios = require('axios')
var gets = require('./lib/gets')
var puts = require('./lib/puts')
var apiRoute = 'https://bobsburger.azurewebsites.net/api/random'

function requestName () {
  return new Promise(gets)
}

function fetchRandomBurgerName () {
  return axios.get(apiRoute)
    .then(function (res) {
      return res.data
    })
}

function getName (resObject) {
  return resObject.name
}

/** Way 1: Promise Chain */
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

/** Way 2: Generators + Promises */

function * program () {
  puts('Enter your name: ')
  var name = yield requestName()
  puts('Fetch from Server...')
  var burgerNameObject = yield fetchRandomBurgerName()
  puts('got something from the server')
  var burgerName = getName(burgerNameObject)
  puts(name + ' wants a ' + burgerName)
}
runs(program)

/** Way 3: Async/Await */
// async function program () {
//   puts('Enter your name: ')
//   var name = await requestName()
//   puts('Fetch from Server...')
//   var burgerNameObject = await fetchRandomBurgerName()
//   puts(burgerNameObject)
//   var burgerName = getName(burgerNameObject)
//   puts(name + ' will get a ' + burgerName)
// }

// program()
