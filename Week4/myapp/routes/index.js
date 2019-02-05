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

router.post('/register', (req, res) => {
  var emailUp = req.body.emailUp;
  var pwdUp = req.body.pwdUp;

  function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  function countEmail(email, callback){
    let sql = `SELECT COUNT(*) AS count FROM user WHERE email = '${email}';`;
    con.query( sql, function(err, result) {
      if (err) {
        throw err;
      } else {
          var resultString = JSON.parse(JSON.stringify(result));
          var rowCount = resultString[0].count * 1;
          // console.log(rowCount);
          callback(rowCount);
        }
    }) // End of con.query
  };

  function submit(row){
        if (!validateEmail(emailUp)) {
          res.render('regiserr', { errmsg: "Oops, this doesn't look like an email address"});
        } else if (pwdUp.length < 4){
          res.render('regiserr', { errmsg: "The password must have at least 4 characters"});
        } else if ( row > 0 ){
          res.render('regiserr', { errmsg: "Sorry, this email has been registerd."});
        } else {
          let sql = `INSERT INTO user (email, password) VALUES ('${emailUp}', '${pwdUp}')`;
          con.query( sql, function (err, result) {
            if (err) throw err;
            console.log('1 user registered.');
            res.redirect('/member');
          })
        } // End of else
    }
  countEmail(emailUp,function(x){
    submit(x);
  });
}); // End of router get

router.post('/login', (req, res) => {
  var emailIn = req.body.emailIn;
  var pwdIn = req.body.pwdIn;

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
      res.render('loginerr', { errmsg: "Sorry, invalid email or password."});
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
