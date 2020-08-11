# .htaccess とは

Apacheの機能で、ページごとにWebサーバの動作を設定することができる

特定のファイルやディレクトリへのアクセスを禁止できるので、セキュリティの面で役に立つ

また、リダイレクトの指定ができるため、動的なURLを静的なURLに偽装することができる

## RewriteRule

リダイレクトの指示を記述する

```
# AというURLアクセスがあったらBというパスのファイルを表示する（Cはオプション）
RewriteRule { A } { B } [ C ]
```

このとき、`{ A }`の中で、`( )`で囲われた内容は、`{ B }`の中で`$1`として受け取れる

複数ある場合は、`$1`、`$2`というように数字が増える

`[ C ]`のオプションでは基本的に`[R=301,L]`を指定する

`R=301`は恒久的な変更を意味する、`R=302`の場合は一時的な変更（一時的にリダイレクトさせたいとき）

`L`を指定すると、`{ A }`の条件にマッチングした場合、その行で確定して終了する

### RewriteBase

RewriteRuleで使用するルートのパスをセットする

基本的には、htaccessが置いてあるディレクトリを記述する

記述しなくても、RewriteRuleにフルパスを記述すれば問題ない

```
# 最後はスラッシュで終わる
RewriteBase { PATH }/
```

[[ 参考 ]](https://murashun.jp/blog/20141229-01.html)

例：
```
RewriteBase /articles/building/
RewriteRule ^([0-9]+)$ $1/ [R=301,L]
RewriteRule ^$ index.php [L]
```

`host/articles/building/000123` へアクセスがあった場合、`host/articles/building/000123/`を表示する。
