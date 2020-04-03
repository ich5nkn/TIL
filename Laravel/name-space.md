# 名前空間について

名前空間がなかったころのPHPは、別々のファイルに同じクラスが存在するとき、その2つのファイルをインポートしてクラスを使おうとするとクラス名の衝突が発生してエラーになっていた

namespaceというディレクトリに似た仕組みを導入してその問題を解決した

# 書き方

`namespace [namespace];` : namespaceの設定 ※ファイルの先頭で宣言する

`use [namespace]` : namespaceの使用

[参考](https://laraweb.net/surrounding/1599/) / [参考](https://qiita.com/7968/items/1e5c61128fa495358c1f)
