# AWS EC2でLaravelプロジェクトをデプロイしたときのメモ

### コンソールでEC2インスタンスにSSHログインする

今回はインスタンスは準備してもらったので、KEYを配置・指定してSSHログイン

キーファイルのパーミッションは６００にする必要がある

`ssh ec2-user@ec2-xx-xx-xx.ap-northeast-1.compute.amazonaws.com -i [キーファイルパス]`

ec2のログインユーザは`ec2-user`という名前らしい

### アクセス確認

Apacheでサーバを起動して`ec2-xx-xx-xx.ap-northeast-1.compute.amazonaws.com`でアクセスしてみる

```bash
$ sudo yum install httpd
$ sudo systemctl start httpd
$ sudo systemctl status httpd
```

ブラウザからURLを叩いたところ、うまく表示されなかった

セキュリティグループの問題だったらしく、AWSコンソールから権限を修正してもらった

### インストールなど

初期状態はほぼデフォルトのCentOS7なため、必要なものなどをインストールしていく

ソースをGitで共有して配置する、今回は`~/projects/`内に配置

PHP、Composer、Docker、Docker-Composeをインストール

Docker-Composeはyumでインストールできなくてcurlでインストールした

```
Docker-Composeのインストール（バージョンは適宜置き換え）
$ sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

バイナリの実行権限付与（？）
$ chmod +x /usr/local/bin/docker-compose

docker-composeインストール確認
$ docker-compose --version
```
Dockerのユーザグループに権限を付与したり色々した
```
Dockerユーザがすでに存在するか確認
$ cat /etc/group | grep docker
Dockerユーザに権限付与
$ sudo usermod -aG docker $USER
$ groups $USER
```

インストール終わったのでdockerとcomposer（yarn的なやつ）を動かす

```
$ cd ~/projects/kintoneTest
$ docker-compose up -d
$ composer update (めっちゃ時間かかる)
```

一時間ほど待っても完了していなかったため、流石におかしいとおもって`Ctrl+C`で停止

vvvオプションをつけると逐一状況を表示してくれるらしいので実行

```
$ composer update -vvv
~~~（中略）~~~
Reading /home/ec2-user/.cache/composer/repo/https---repo.packagist.org/provider-phpunit$phpunit.json from cache
ここでとまっていた
```

PHPのバージョン（開発環境 v7.4.2 / EC2 v5.4.16）が関係するのではと思いバージョンアップ

※ EC2のデフォルトはPHP5.4.16が入っているがPHPはバージョンの違いで割と変わるため入れ直すのが吉

```
一旦PHP5.4を削除
$ sudo yum remove php-*
$ yum install php
```
↑これで最新こないかなーと思ったが5.4だったのでキャンセル

baseリポジトリ（公式）以外のところから持ってこないといけないらしい [[参考サイト]](https://qiita.com/ozawan/items/caf6e7ddec7c6b31f01e)
```
EPELとRemiリポジトリを追加
$ sudo rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
$ sudo rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

インストールしたいバージョンを指定、パッケージは任意（よく分からないため、参考サイトそのまま）
$ sudo yum install --enablerepo=remi,remi-php74 php php-devel php-mbstring php-pdo php-gd php-xml php-mcrypt
```
エラーになった（php-mcryptパッケージが問題？）

とりあえずphpだけでも入れることにした
```
$ sudo yum install --enablerepo=remi,remi-php74 php
$ php --version
```
5.4.16が入っている・・・なんで・・・・どうして・・・・・

baseリポジトリのphp5.4.16が優先的にインストールされるみたい [[参考サイト]](https://qiita.com/heimaru1231/items/84d0beca81ca5fdcffd0)

もう一度削除して、baseリポジトリを無効にして追加したリポジトリのみ参照してインストールしてみる

```
$ sudo yum install --disablerepo=* --enablerepo=epel,remi,remi-safe,remi-php74 php

~~~（中略）~~~
--> 依存性解決を終了しました。
エラー: パッケージ: php-cli-7.4.4-1.el7.remi.x86_64 (remi-php74)
             要求: libncurses.so.5()(64bit)
エラー: パッケージ: php-cli-7.4.4-1.el7.remi.x86_64 (remi-php74)
             要求: libtinfo.so.5()(64bit)
```
`libncurses.so.5`と`libtinfo.so.5`が無いというエラーだと思われる

```
$ sudo yum install libncurses.so.5
$ sudo yum install libtinfo.so.5
```

インストールして再度実行したが同じエラーになる、(64bit)っていうのが怪しそう？

このへんで意味がわからくなったため別のやり方をためす

php7.4をインストール

`$ yum install php74`

良く分からないけど[[このまま]](http://coechama-hobby.blog.jp/archives/836608.html)
```
$ source /etc/profile.d/modules.sh
$ module load php74
```
