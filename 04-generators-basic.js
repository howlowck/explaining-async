var puts = require('./lib/puts')
function * countDown () {
  puts('Fuel Check')
  yield 3

  puts('Engine Check')
  yield 2

  puts('Electrical Check')
  yield 1

  puts('Launching...')
}

var iterator = countDown()

puts('starting countdown..')
var yieldedResult = iterator.next() // { value: 3, done: false }
puts(yieldedResult.value)
yieldedResult = iterator.next() // { value: 2, done: false }
puts(yieldedResult.value)
yieldedResult = iterator.next() // { value: 1, done: false }
puts(yieldedResult.value)
yieldedResult = iterator.next() // { value: undefined, done: true }
puts(yieldedResult.value)
