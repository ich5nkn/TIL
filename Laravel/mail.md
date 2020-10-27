# Laravelでメールを送る

まずは`.env`で、メールの送信サーバの設定をする

基本的にsmtp方式を使う

サンプル

```
MAIL_DRIVER=smtp
MAIL_HOST=mail.co.jp
MAIL_PORT=587
MAIL_USERNAME=dyekv
MAIL_PASSWORD=*****
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=dyekv@mail.co.jp
MAIL_FROM_NAME="${APP_NAME}"
```

smtpサーバの情報は覚えていなかったが、パスワード以外はメーラーの設定を見ればわかる




