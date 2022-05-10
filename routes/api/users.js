var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log('$$$ get users ACCEPT $$$');
  console.log(req);
  const response = {
    'get': 'ok'
  }
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
  res.send(response);
});
router.post('/', function (req, res, next) {
  console.log('$$$ post users ACCEPT $$$');
  console.log(req);
  const response = {
    'post': 'ok'
  }
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
  res.send(response);
});

//routerをモジュールとして扱う準備
module.exports = router;