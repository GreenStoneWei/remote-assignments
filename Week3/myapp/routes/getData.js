const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const number = req.query.number;
  function isEmpty(obj) {
    for(let key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
      }
    return true;
  }
  if (isEmpty(req.query)){
    res.send('<h2>Lack of Parameter</h2>');
    }
  else if ( parseInt(number) == NaN ) {
      res.render('<h2>Wrong Parameter</h2>');
    }
  else {
      function getDataFunc(argInput){
        var dataSum = 0 ;
        for (let i = 0; i < (argInput + 1)/10 ; i += 1){
          dataSum += i ;
        }
        return dataSum;
        }
      var result = new Object(getDataFunc(number));
      res.send(result);
      }
})
module.exports = router;
