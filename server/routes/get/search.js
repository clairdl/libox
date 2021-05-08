const express = require('express');

const router = express.Router();

router.get('/test', (req, res) => {
  res.send('hey guys from the search.js file lel');
});

module.exports = router;
