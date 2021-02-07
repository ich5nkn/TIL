## AWSセキュリティグループ

データの安全性を確保するために多くの堅牢なセキュリティオプションを提供している

仮想サーバに組み込まれたファイアウォールのように動作

各インスタンスへの接続の可否を制御する

![security](https://user-images.githubusercontent.com/56820273/106374745-2bd6b600-63c9-11eb-8ff4-16d3e4fef812.png)

ウェブ層ではインターネットからのアクセスを許可している

アプリケーション層では、ウェブ層からのアクセスのみ許可している

データベース層ではアプリケーション層からのアクセスのみ許可している

それぞれに社内からのSSH接続の許可を追加している

### デモ

EC2の画面を開く

左の`Network & security`の`Security Groups`を選択するとリストが表示される

`Create Security Group`でセキュリティグループを作成する

デフォルトでは全てのインバウンドトラフィックが拒否され、全てのアウトバインドトラフィックが許可されている

試しにインバウンドにHTTPとHTTPSを追加してCreate


