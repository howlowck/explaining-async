var puts = require('./lib/puts')

function * countDown (fuelStatus) {
  if (fuelStatus.everythingGood) {
    var engineStatus = yield 3 // engineStatus === {everythingGood: true}
  }

  if (engineStatus.everythingGood) {
    var electricalStatus = yield 2
  }

  if (electricalStatus.everythingGood) {
    var finalStatus = yield 1
  }

  if (finalStatus.everythingGood) {
    return 0
  }
}

var fuel = {everythingGood: true}
var iterator = countDown(fuel)

puts('starting countdown..')

var yieldedResult = iterator.next() // { value: 3, done: false }
puts(yieldedResult.value)

var engineCheck = {everythingGood: true}
yieldedResult = iterator.next(engineCheck) // { value: 2, done: false }
puts(yieldedResult.value)

var electricalCheck = {everythingGood: true}
yieldedResult = iterator.next(electricalCheck) // { value: 1, done: false }
puts(yieldedResult.value)

var finalCheck = {everythingGood: true}
yieldedResult = iterator.next(finalCheck) // { value: 0, done: true }
puts(yieldedResult.value)
