var GoogleSpreadsheet = require('google-spreadsheet');
const config = require('./config.js')

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1fFt4Xp8eE2Ii_a2YPqJnG7iN9OvNO4qWt0kJDUxJfvk');

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(config.googleApiCreds, function (err) {

  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function (err, rows) {
    console.log(rows);
  });
});