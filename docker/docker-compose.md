
# docker-compose

dockerのコンテナをより簡単に起動する方法

起動するコンテナのパラメータと共にdocker-compose.ymlというファイルに記述し、ディレクトリにいれておけば後は自動で起動してくれる

複数のコンテナを１コマンドで実行できる

# コマンド

docker-compose up -d //起動

docker-compose down //終了＆削除

# composeFile 書き方

- `version:`
  
  - 一番上に書く
  
  - docker-composeのversion 
  
  - versionによって記法が違うので注意、以下はver3系の記法
  
- `services:`

  - ここにコンテナの設定を書いていく 以下は設定項目の一例
  
  - `image:` 使用するdokerimage (公式 or URL)
  
  - `ports:` portの対応付け
  
  - `environment:` 環境変数設定
  
  - `volumes:` マウントする設定ファイルのパスを指定
  
  - `restart:` 実行時に再起動するか

# CentOSでのDocker-composeのインストール

`yum install docker-compose`ではインストールできない

```sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose```

`1.22.0`の箇所についてはバージョンなので適宜置き換え

`sudo chmod +x /usr/local/bin/docker-compose`

`docker-compose --version`などでインストールできているかを確認
