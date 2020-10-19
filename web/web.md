# WEBアプリがブラウザ上に表示される仕組み

### ApacheサーバでLaravelを動かす場合

まずはApacheとPHPのインストール及び設定を行う

[ Apache 設定 ](https://www.adminweb.jp/apache/)

ApacheのドキュメントルートにHTMLファイルを配置すれば、そのHTMLファイルが見れる

LaravelプロジェクトをGitからPullしてcomposerでパッケージのインストール

Reactなどのviewに必要なパッケージもインストール（yarn)

ドキュメントルートをLaravelプロジェクトのpublicに設定すると、

Laravelとyarn（viewで使用）を走らせた状態であればLocalhostで見たときと同じようにWEBアプリにアクセスできる

### node.jsを使用する場合

node.jsはサーバの役割もこなすため、Apacheは不要

ただし、80番ポートでの使用は通常許可されていないため、ポートフォワーディングを行う必要がある

ポートフォワーディングやロードバランサ・リバースプロキシなどはApacheよりもnginxがよく使われる

nginxで80番ポートにアクセスしたとき、3000番ポートに接続されるように設定すれば、

yarn startするだけでWebアプリにアクセスできる

ファイルを配置するとか、パスがどうとかは関係ない
