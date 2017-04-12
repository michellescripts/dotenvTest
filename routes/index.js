var express = require('express')
var router = express.Router()
require('dotenv').config()

// example from npm request
// var request = require('request')
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error) // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
//   console.log('body:', body) // Print the HTML for the Google homepage.
// })

var request = require('request')
request('https://www.goodreads.com/book/title.xml?author=Arthur+Conan+Doyle&key=' + process.env.API_KEY + '&title=Hound+of+the+Baskervilles', function (error, response, body) {
  console.log('error:', error) // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
  console.log('body:', body) // Print the HTML for the Google homepage.
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
