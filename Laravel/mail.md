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

メール自体の設定は[ ここ ](https://www.ritolab.com/entry/38)を参考に作成した

一旦この通りに実装して、`Insomnia`からPOST送信するとメールが送信できるようになった

今回は、APIでメール送信ではなく、ログイン処理中にメール送信（ワンタイムパスワード）したいので

`MailController.php`の`use`部分と、関数の中身をログインのコントローラに移植した






