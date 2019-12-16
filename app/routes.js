const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Passing data into a page
router.get('/stored-data', function (req, res) {
	console.log(req.session.data)
  res.render('stored-data')
})


router.get('/docs/examples/pass-data/vehicle-registration-clean', function (req, res) {
	req.session.data = {}
  res.redirect('vehicle-registration')
})


router.get('/docs/examples/pass-data/vehicle-registration-car1', function (req, res) {
	req.session.data = {
  "vehicle-registration": "test-plate",
  "vehicle-type": "Car",
  "vehicle-features": [
    "Heated seats",
    "Radio"
  ]
}
  res.redirect('vehicle-registration')
})

router.get('/docs/examples/pass-data/vehicle-registration-car2', function (req, res) {
	req.session.data = {
  "vehicle-registration": "BO12 3XX",
  "vehicle-type": "Car",
  "vehicle-features": [
    "Heated seats",
    "GPS",
    "Radio"
  ]
}
  res.redirect('vehicle-registration')
})

router.get('/docs/examples/pass-data/vehicle-registration-lorry1', function (req, res) {
	req.session.data = {
  "vehicle-registration": "LR56 RRY",
  "vehicle-type": "Lorry",
  "vehicle-features": [
    "GPS",
    "Radio"
  ]
}
  res.redirect('vehicle-registration')
})





module.exports = router
