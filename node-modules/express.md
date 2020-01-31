# expressとは

Node.jsのMVCフレームワーク

MVCフレームワークは(Modul,View,Controller)で構成されたフレームワーク

簡単にサーバを建てることができる

クライアント → Express(routing) → DB のような動きになる

# 使い方

npmからインストール

```typescript
// import
import express from 'express';
const server = express();

// 各種パラメータに対する処理を記述
// この例はルートディレクトリにGET（アクセス）したとき page/index.htmlを表示する
server.get('/',(req,res)=>{
  res.sendFile( __dirname + '/page/index.html');
})

// 3000ポートにサーバを建てる（待ち受け）
server.listen(3000);
```

この例だとリクエストに対するRoutingをひとつずつ書かないといけない

Next.jsを使えばRoutingを手入力で設定しなくても、ファイルベースでのルーティングができる

その場合は、API(DBへの処理）はRouting-ControllerとTypeORMを使う
