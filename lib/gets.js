var inquirer = require('inquirer')
var uniqid = require('uniqid')

function gets (cb) {
  var id = uniqid()
  inquirer.prompt([{
    name: id,
    type: 'input',
    message: ' '
  }]).then(function (answers) {
    cb(answers[id])
  })
}

module.exports = gets
