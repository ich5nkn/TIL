# Dockerfileとは

DockerImageの元になるファイル（ソース）

# 作成方法（記述方法）

形式はテキストファイルなのでVim等で作成できる（ファイル名は頭大文字で'Dockerfile'にする）

### FROM

ベースとなるイメージを指定する

公式リポジトリから取得する方法が一番簡単

Dockerfileは上から順番に処理を実行するのでFROMは一番先頭に書く必要がある

### RUN

コマンドの実行（上から）

RUNの後に引数を羅列していく、各引数は`&&`でつなぐ、改行したいときは`\`入れる

# DockerfileからImageを生成する

` docker build -t [ImageName] [Dockerfileが置いてあるディレクトリパス]` でイメージを生成する

