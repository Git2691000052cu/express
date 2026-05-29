var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb"); // データベースの部品をロード [cite: 8-52]

// ★ここをご自身の「パスワード入り接続URL」に丸ごと書き換えます！ [cite: 8-55, 8-68]
const uri = "***************";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
  try {
    const database = client.db('notes'); // 「notes」データベースを指定 [cite: 8-59]
    const notes = database.collection('notes'); // 「notes」コレクションを指定 [cite: 8-60]
    
    const query = { id: 2 }; // 資料の注意点：idは2のデータを検索します [cite: 8-62]
    const note = await notes.findOne(query); // データベースから1件検索 [cite: 8-64]
    
    res.json(note); // 見つかった生データをJSONで返却！ [cite: 8-65]
  } catch (error) {
    res.status(500).json({ error: "DB接続エラー" });
  }
});

module.exports = router;