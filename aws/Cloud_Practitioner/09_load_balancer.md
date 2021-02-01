## Application Load Balancer

Elastic Load Balancingサービスの一部？

もともとのロードバランサーより、機能が追加されているらしい

HTTP/2対応、WebSocket対応、アクセスログ、ヘルスチェック、IPｖ６対応、パスペースのルーティング

そもそももともとのロードバランサーを知らないのだが・・？

ロードバランサとは、コンテナを使って作成したマイクロアプリケーションにルーティングさせる機能

同じインスタンスにアクセスしつつ、ポートによってパスを変えることができる

![load_balancer](https://user-images.githubusercontent.com/56820273/106383363-c60a1e80-6408-11eb-9216-430eff009311.png)

用語

![words](https://user-images.githubusercontent.com/56820273/106383392-fc479e00-6408-11eb-8a18-2c46b298aa12.png)

### デモ

コンソールからEC2を選択

EC2のインスタンスでコンテナを２つ生成し、80と443でリッスンさせている

左のメニューから`Load Balancers`を選択、`Create Load Balancer`で作成

ここで、`Application Load Balancer` か、 `Clasic Load Balancer`かを選択できる

`Listeners`にポートを追加する（80はデフォルトで許可されているので443を追加）

次に`Availability Zones`を選択するが、ロードバランサを使うには２つ以上選択する必要がある

事前にVPCにサブネットを複数設定しておき、その２つのサブネット（Availability Zone）を選択する

SSLを使う場合は２ページ目で設定する

３ページ目でセキュリティグループを選択する

４ページ目でターゲットグループの選択と、ヘルスチェックの設定をする

`new target group`にしておくと作成される

５ページ目でインスタンスの選択（チェックしてから`Add to refistered`で登録される）

左のメニューから`Target Groups`を選択してターゲットグループを追加で作成する（こんどは443ポートの分）

フォワード先が１つ目のコンテナになっているため、２つ目のコンテナに変更する


