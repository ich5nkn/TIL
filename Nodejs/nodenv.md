# nodenvとは

node.jsのバージョンをディレクトリ単位で管理する仕組み

プロジェクトごとに自動でnodeJsのヴァージョンを切り替えてくれる

`.node-version`ファイルにnodeのバージョンを指定しておけばそれが優先される

対象のバージョンを持っていなければ、インストールする必要がある

### node.jsのインストール

`nodenv install 12.0.0`

### インストール可能なリスト

`nodenv install --list`

### 欲しいバージョンがインストール可能なリストに存在しないとき

nodenvのディレクトリ下にある、`node-build`ディレクトリに移動する

`cd ~/.nodenv/plugins/node-build` （インストール時の方法によってパスは違う）

Gitからアップグレードする　`git pull`

作業フォルダに戻って`nodenv install 12.0.0`

