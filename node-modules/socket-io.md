# socket.io とは

node_modules、リアルタイムな双方向通信を簡単に実装できる

具体的にはチャットアプリなどユーザ間で情報を同期させる際に必要

# 使用方法

npmかyarnでインストールする

Reactで使用する際はimportする `socket from 'socket.io'`

# 書き方

処理の基本的な流れは、クライアント（送信） → サーバ（受信） → サーバ（送信） → クライアント（受信）

### クライアント（送信）

`socket.emit(key,value)` メソッドを使う

`key` は任意の文字列で良い（受け取り側にも同じ文字列を指定する）

`value` には関数、オブジェクトが指定できる

### クライアント（受信）

`socket.on(key,fanc)` メソッドを使う

`key` は送信で設定したものと同じ

`fanc` の引数に受信した内容が入るのでその後の処理を記述する

例：`socket.on('chat',msg => console.log(msg))`

### サーバ（受信、送信）

クライアントと同じようにonメソッドで受信してemitメソッドで送信する

onメソッドの第一引数に`'connection'`を指定することで接続の確認ができる

接続されている場合は第二引数の関数が実行される

```javascript
// 例：
io.on('connection', function(socket){
 
    socket.on('chat', function(msg){
        io.emit('chat', msg);
    });
 
});
```

このように記述することでクライアントが送信してきたメッセージを全員に配信できる
