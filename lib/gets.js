// var inquirer = require('inquirer')
// var uniqid = require('uniqid')

// function gets (cb) {
//   var id = uniqid()
//   inquirer.prompt([{
//     name: id,
//     type: 'input',
//     message: ' '
//   }]).then(function (answers) {
//     cb(answers[id])
//   })
// }

var readline = require('readline')

function gets (cb) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('', (answer) => {
    // TODO: Log the answer in a database
    rl.close()
    cb(answer)
  })
}

module.exports = gets
