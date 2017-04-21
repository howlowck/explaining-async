function run (generator) {
  var genObject = generator()
  var yieldedValue

  function loop (resolvedValue) {
    yieldedValue = genObject.next(resolvedValue) // {value: Promise, done: false}
    if (!yieldedValue.done) {
      if (typeof yieldedValue.value.then === 'function') {
        yieldedValue.value.then(loop)
      } else {
        setTimeout(function () {
          loop(yieldedValue.value)
        }, 0)
      }
    }
  }

  loop() // start the loop
}

module.exports = run
