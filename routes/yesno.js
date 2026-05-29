var express = require('express');
var router = express.Router();
const request = require('request'); // 通信部品をロード [cite: 660]

// 「http://localhost:30163/yesno」にアクセスが来た時の処理
router.get('/', async (req, res) => {
  // 🎯 宛先を「YesNo API」に変更するだけ！
  request('https://yesno.wtf/api', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body); // 届いたデータをJSONに変換 [cite: 664]
      res.json(data); // そのまま画面に横流し！ [cite: 664]
    }
  });
});

module.exports = router;