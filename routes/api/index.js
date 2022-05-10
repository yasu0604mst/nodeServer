var express = require('express');
var router = express.Router();

router.use('/users', require('./users.js'));
router.use('/play', require('./play.js'));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<html>api/index</html>');
});
// const response = {
//   messageId : '00000',
//   errorMessage:'',
//   userList:[
//     {
//       id:'1',
//       name:'kubota'
//     },
//     {
//       id: '2',
//       name: 'suzuki'
//     }, 
//     {
//       id: '3',
//       name: 'kimura'
//     }
//   ]
// }

//routerをモジュールとして扱う準備
module.exports = router;