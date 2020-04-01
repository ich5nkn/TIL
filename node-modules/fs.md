# fsとは

ファイルの読み込み・書き出しなどファイル操作関連のライブラリ

nodeに標準で組み込まれている

# 使い方

`import fs as "fs";` でインポート

```javascript
// ディレクトリが存在しなければ作成するサンプル
if(!fs.existsSync(path)){
    fs.mkdirSync(path);
}
```

