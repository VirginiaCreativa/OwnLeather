var express = require('express');
var router = express.Router();

router.get('/api/github', function(req, res, next) {
  res.json({ api: '-Virginia Velásquez Soto'})
});

module.exports = router;
