const express = require('express'); // expressモジュールを読み込む
var bodyParser = require('body-parser');


const index = require('./routes/index'); // requireで、使用するミドルウェア（後述）をセット。
const app = express(); // expressアプリを生成する


const ALLOWED_METHODS = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'HEAD',
    'OPTIONS'
];

const ALLOWED_ORIGINS = [
    'http://localhost:4200',
];

//body-parserの設定
// レスポンスHeaderを組み立てる
app.use((req, res, next) => {
  const origin = req.headers.origin;
  console.log('acceppt origin:' + origin);
  if (ALLOWED_ORIGINS.indexOf(req.headers.origin) > -1) {
    // sess.cookie.secure = true;
    res.cookie('example', Math.random().toString(), {
      maxAge: 86400,
      httpOnly: true
    });
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', ALLOWED_METHODS.join(','));
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Accept,X-Custom-Header');
  }
  // console.log('res:' + res.header('Access-Control-Allow-Origin'));
  next();
});

// CORSを許可する
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/', index); // ルーティング（後述）の設定。

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));