const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "assignment"
});

router.get('/register', (req, res) => {
  var emailUp = req.query.emailUp;
  var pwdUp = req.query.pwdUp;

  function validateEmail(email) {
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
  };

  function checkRegisteredEmail(email){
    let sql = `SELECT COUNT(*) AS count FROM user WHERE email = '${email}';`;
    con.query( sql, function(err, result) {
      if (err) {
        throw err;
      } else {
          var resultString = JSON.parse(JSON.stringify(result));
          var rowCount = resultString[0].count * 1;
        }
      console.log(rowCount);
      // return rowCount;
      if (rowCount > 0){
        return true;
      }
      return false;
    }) // End of con.query
  };

  if (!validateEmail(emailUp)) {
    res.send("Oops, this doesn't look like an email address"); // The error message should popup right below the input box. TO DO: use pug??
  } else if (pwdUp.length < 4){
    res.send("The password must have at least 4 characters");
  } else if ( checkRegisteredEmail(emailUp) ){
    res.send("Sorry, this email has been registerd.");
  } else {
    let sql = `INSERT INTO user (email, password) VALUES ('${emailUp}', '${pwdUp}')`;
    con.query( sql, function (err, result) {
      if (err) throw err;
      console.log('1 user registered.');
      res.redirect('/member');
    })
  } // End of else
});

router.get('/login', (req, res) => {
  var emailIn = req.query.emailIn;
  var pwdIn = req.query.pwdIn;

  function isEmpty(obj) {
    for(let key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
      }
    return true;
  }

  var loginSQL = `SELECT * FROM user WHERE email = "${emailIn}" AND password = "${pwdIn}"`;
  con.query( loginSQL, function (err, result) {
    if (err) throw err;
    var resultString = JSON.parse(JSON.stringify(result));
    if (isEmpty(resultString)) {
      res.send("Sorry, invalid email or password.")
    } else {
      res.redirect('/member');
    }
  }) // End of query.
});


router.get('/member', (req, res) => {
  res.send('Welcome');
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = router;
// module.exports = con;
