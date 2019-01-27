const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  var number = req.query.number;
  number = number * 1;
  function isEmpty(obj) {
    for(let key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
      }
    return true;
  }
  console.log('req.query= ' + req.query);
  console.log('req.query.number= ' + number);
  console.log(typeof(number));
  console.log(number);

  if (isEmpty(req.query)){
    res.send('<h2>Lack of Parameter</h2>');
    }
  else if ( isNaN(number) ) {
    res.send('<h2>Wrong Parameter</h2>');
    }
  else {
      function getDataFunc(argInput){
        var dataSum = 0 ;
        for (let i = 0; i < argInput + 1 ; i += 1){
          dataSum += i ;
        }
        return dataSum;
        }
      var result = new Object(getDataFunc(number));
      res.send(result);

      }
})
module.exports = router;
