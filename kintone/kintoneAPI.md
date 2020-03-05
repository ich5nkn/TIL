# KintoneのAPIを使う

KintoneはAPIを公開しており、アプリ内の情報を取得したり追加修正したりできる

## URI

レコード１件取得

`https://(サブドメイン名).cybozu.com/k/v1/record.json`

レコード全件取得

`https://(サブドメイン名).cybozu.com/k/v1/records.json`

[その他](https://developer.cybozu.io/hc/ja/articles/360000313406)

## HEAD(認証)

Kintoneの認証の方法は２つある

1. ユーザのログイン情報を使う方法

    `id:password` をbase64でエンコード （idはメールアドレスなど、間のコロンは必須）

    `'X-Cybozu-Authorization: (base64エンコード結果)'`

2. APIトークンを使う方法

    Kintoneのアプリ管理画面を開きAPIトークンのメニューからトークンを生成 → アプリ更新

    アプリごとに設定でき、権限を制限できるため流出時のリスクを減らすことができる

    `'X-Cybozu-API-Token: 発行したAPIトークン'`

# クロスドメイン成約

JSでKintoneAPIを利用しようとしたらKintoneサイト内でしか実行できない

サーバ→サーバのやり取りは行えるため、PHPでKintoneAPIリクエストを送るAPIを作る

クライアント → PHPサーバ → Kintone
