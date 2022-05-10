var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send(response);
});
response = {
  messageId: '00000',
  errorMessage: '',
  userList: [{
      id: '1',
      name: 'kubota'
    },
    {
      id: '2',
      name: 'suzuki'
    },
    {
      id: '3',
      name: 'kimura'
    }
  ]
}
module.exports = router;