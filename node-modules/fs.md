# fsとは

ファイルの読み込み・書き出しなどファイル操作関連のライブラリ

nodeに標準で組み込まれている

ファイルの入出力は高速な非同期処理と安全な同期処理(Sync)のメソッドがそれぞれ用意されている

# 使い方

`import fs as "fs";` でインポート

```javascript
// ディレクトリが存在しなければ作成するサンプル
if(!fs.existsSync(path)){
    fs.mkdirSync(path);
}

// ファイルを同期処理で書き出すサンプル
fs.writeFileSync("../uploads/" + filename , fileData);
```

