WEBシステムからプリンタでプリントするためには、ブラウザの印刷ダイアログを起動するしかない

レシート発行のように、ダイアログを開くことなく自動で出力するためには、工夫をする必要がある

JSからはHTTP通信しか送ることができない（GETやPOSTなど）

クライアント側でNodeJSサーバを立ち上げ、localhostにHTTPリクエストを送る

※ 機能を使用するすべてのクライアントでサーバを立てる必要がある

Node.jsでexecを使いシェルコマンドを実行する [[ 参考 ]](https://www.wakuwakubank.com/posts/728-nodejs-child-process/)

lprコマンドで印刷ができる

[スマプリ対応](https://www.sato.co.jp/products/printertool/smapri/)のプリンタならサーバを内包しているため、HTTPリクエストのみで印刷ができる
