var express = require('express');
var router = express.Router();


router.use('/api', require('./api/index.js'));

module.exports = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<html>root/index</html>');
});

module.exports = router;