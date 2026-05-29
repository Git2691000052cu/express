var express = require('express');
var router = express.Router();
// 1. さっきインストールした request モジュールを読み込む [cite: 660]
const request = require('request');

// 2. 「http://localhost:30163/cat」にアクセスが来た時の処理 [cite: 661]
router.get('/', async (req, res) => {
  // 3. インターネットの向こうにある The Cat API サーバーへGET要求を送信 [cite: 662]
  request('https://api.thecatapi.com/v1/images/search', function (error, response, body) {
    
    // 4. エラーがなく、相手のサーバーから「200（通信大成功）」の返事が来たら処理を実行 [cite: 663]
    if (!error && response.statusCode == 200) {
      // 5. 届いた生データの文字列（body）を、JavaScriptで扱えるJSONオブジェクトに変換 [cite: 664]
      const data = JSON.parse(body);
      // 6. あなたのExpressサーバーの返事として、PostmanやブラウザにそのままJSONを返却！ [cite: 664]
      res.json(data);
    }
  });
});

module.exports = router; // 外部（app.js）から使えるようにエクスポート [cite: 669]