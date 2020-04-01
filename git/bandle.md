# バンドルファイルとは

Gitのコミットをファイル化したもの

ネットワークが通っていないところへコミットを送るときに使う

URLの代わりにバンドルファイルを指定してクローンすることができる

詳しい設定方法 

https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E3%81%95%E3%81%BE%E3%81%96%E3%81%BE%E3%81%AA%E3%83%84%E3%83%BC%E3%83%AB-%E3%83%90%E3%83%B3%E3%83%89%E3%83%AB%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E4%BD%9C%E6%88%90

# バンドルファイルの生成方法

`git bundle create [出力先のパス] [バンドル生成に使うブランチ]`

例 : `git bundle create ../master.bundle master`

# バンドルを使った本番環境の入替え手順

本番サーバにUSBなどでバンドルファイルを置く

`git pull [bundleファイルのパス] [bundleのブランチ名]:[置き換えるブランチ名]`

例 : `git pull ../master.bundle master:master`

ビルドする `yarn build`

`Done`と表示されビルドが終わったら、サービスを再起動する

`systemctl restart xxxx` などで再起動できるように設定しておく

起動後に軽く動作確認して終了
