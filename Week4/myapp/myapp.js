const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static('public'));

// app.set('view engine', 'pug');

const mainRoutes = require('./routes');
// const getDataRoutes = require('./routes/getData');
const indexRoutes = require('./routes/index');


app.use(mainRoutes);
// app.use('/getData', getDataRoutes);
app.use('/index', indexRoutes);


// app.get('/', (req, res) => {
//   res.send('Hello My Server!');
// })
app.get('/',function (req,res) {
  res.sendFile( __dirname + '/public/homepage.html');
})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
