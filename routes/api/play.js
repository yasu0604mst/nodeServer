var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function (req, res, next) {
  const videopath = './test.mp4';
  // console.log(req.url);
  // console.log(req.method);
  // console.log(req.params);
  // console.log(req.query);
  // console.log(req.body);
  // console.log('request' + req.url + 'from client');

  var path = './test.mp4';
  var stat = fs.statSync(path);
  var total = stat.size;
  if (req.headers['range']) {
    var range = req.headers.range;
    var parts = range.replace(/bytes=/, "").split("-");
    var partialstart = parts[0];
    var partialend = parts[1];

    var start = parseInt(partialstart, 10);
    var end = partialend ? parseInt(partialend, 10) : total - 1;
    var chunksize = (end - start) + 1;
    console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);

    var file = fs.createReadStream(path, {
      start: start,
      end: end
    });
    res.writeHead(206, {
      'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4'
    });
    file.pipe(res);
  } else {
    console.log('ALL: ' + total);
    res.writeHead(200, {
      'Content-Length': total,
      'Content-Type': 'video/mp4'
    });
    fs.createReadStream(path).pipe(res);
  }
});

//routerをモジュールとして扱う準備
module.exports = router;