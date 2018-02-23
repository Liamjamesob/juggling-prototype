var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.post('/juggling-trick', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']
 console.log(jugglingBalls)
  // Check whether the variable matches a condition
  if (jugglingBalls == "Three or more"){
    // Send user to next page
    res.redirect('/juggling-trick')
  } else if (jugglingBalls == undefined) {
    // Send user to ineligible page
    res.redirect('/juggling-balls-error')
  } else {
    res.redirect('/ineligible')
  }

})

module.exports = router
