const express = require('express');
const router = express.Router();

router.get('/myName', (req, res) => {
    const name = req.cookies.name;
    if (name) {
      res.send('<h2>Hello</h2>' + name );
    } else {
      res.redirect('./trackName.html');
    }
});

router.get('/trackName', (req, res) => {
  res.cookie('name', req.query.name);
  res.redirect('/myName');
});

module.exports = router;
