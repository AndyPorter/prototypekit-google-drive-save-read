const express = require('express')
const router = express.Router()


var rowData;
var sessionDate;
var x;

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


router.get('/sheet', function (req, res) {
	var GoogleSpreadsheet = require('google-spreadsheet');
	var creds = require('./client_secret.json');

	// Create a document object using the ID of the spreadsheet - obtained from its URL.
	var doc = new GoogleSpreadsheet('1fFt4Xp8eE2Ii_a2YPqJnG7iN9OvNO4qWt0kJDUxJfvk');

	// Authenticate with the Google Spreadsheets API.
	doc.useServiceAccountAuth(creds, function (err) {

	  // Get all of the rows from the spreadsheet.
	  doc.getRows(1, function (err, rows) {
	  	rowData = rows[0]['state'];
	    console.log(rowData);
	  });
	});


  res.render('sheet', { 'sheetData': rowData })
})

router.get('/sheet2', function (req, res) {
	var GoogleSpreadsheet = require('google-spreadsheet');
	var creds = require('./client_secret.json');

	// Create a document object using the ID of the spreadsheet - obtained from its URL.
	var doc = new GoogleSpreadsheet('1fFt4Xp8eE2Ii_a2YPqJnG7iN9OvNO4qWt0kJDUxJfvk');

	// Authenticate with the Google Spreadsheets API.
	doc.useServiceAccountAuth(creds, function (err) {

	x = "";

	  // Get all of the rows from the spreadsheet.
	  doc.getRows(1, function (err, rows) {
	  	sessionDate = rows[0]['date-saved'];
	  	x = JSON.parse(rows[0]['session-json']); 
	  	//	var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');		
			// x = rows[1]['session-json']; 
	    // console.log(rowData);
	  });
	});

	req.session.data = x;
  res.render('sheet2', { 'sheetData': sessionDate })
})



module.exports = router
