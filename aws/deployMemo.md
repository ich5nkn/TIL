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

### PHPのバージョン変更

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
$ php -v
PHP 7.4.4 (cli)
```

※このやり方（source）は`bashrc`などを追加読み込みする時の方法なので、違うセッションでは反映されない

正しくは、`/usr/bin/php`として`/usr/bin/php74`のシンボリックリンクを作るらしい（やってもらった）

### Composerを動かす

どうやら無事にPHP7.4が入ったようなので`composer update`を実行したがエラー

```
$ composer update

Loading composer repositories with package information
Updating dependencies (including require-dev)

mmap() failed: [12] Cannot allocate memory

mmap() failed: [12] Cannot allocate memory
PHP Fatal error:  Out of memory (allocated 763371520) (tried to allocate 4096 bytes) in phar:///usr/local/bin/composer/src/Composer/DependencyResolver/RuleWatchGraph.php on line 52

Fatal error: Out of memory (allocated 763371520) (tried to allocate 4096 bytes) in phar:///usr/local/bin/composer/src/Composer/DependencyResolver/RuleWatchGraph.php on line 52
```

メモリが足りない・・・？[スワップ](https://wa3.i-3-i.info/word1718.html)というものを試してみることに [[参考サイト]](https://tsukada.sumito.jp/2019/11/26/mmap-failed-12-cannot-allocate-memory/)

```
$ free
              total        used        free      shared  buff/cache   available
Mem:        1006960      218660      696092         636       92208      670584
Swap:             0           0           0

$ cat /proc/swaps
$ sudo dd if=/dev/zero of=/swapfile bs=1M count=2048 （ちょっと時間かかった）
$ sudo chmod 600 /swapfile
$ sudo mkswap /swapfile
$ sudo swapon /swapfile

$ free
              total        used        free      shared  buff/cache   available
Mem:        1006960      221176       64672         636      721112      637444
Swap:       2097148           0     2097148
```

これでもう一度composerを動かしてみる

`Your requirements could not be resolved to an installable set of packages.`というエラーが出た

パッケージが足りないという意味らしいのでyumしてくる [[参考サイト]](https://qiita.com/miyzawa/items/c4b786f3a2484bc62ef6)

`$ sudo yum install --enablerepo=remi,remi-php74 php php-devel php-mbstring php-pdo php-gd`

同じエラーで動かない、どうやら5.4のパッケージがインストールされた模様

`$ sudo yum install --disablerepo=* --enablerepo=remi,remi-php74 php php-devel php-mbstring php-pdo php-gd`

でやってみるものの、エラー（存在しないみたい？）

パッケージの名前が違っていた模様、php7.4では`php74-php-mbstring`という名前になっている

`$ sudo yum install php74-php-mbstring`でインストールできた

php5.4などのシステムを動かすためバージョンごとに別パッケージとして公開している（RedHat系Linuxの特徴らしい）

パッケージ名は補完などをしてくれないので`yum search mbstring`などで検索するかググるかで正式名称を取得する

composerを動かすとDOMも無いと怒られたので`$ yum install php74-php-xml`

ついに`composer update`が動いた

### .envファイルの準備

再起動して、接続できるか確認したが、接続できなかった

原因は`.env`ファイルが無かったため、`git clone`したときは`.gitignore`で必要なファイルがないか確認する

無事、起動してブラウザからURLでアクセスできたので完了
