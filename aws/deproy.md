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

Dockerのユーザグループに権限を付与したり色々した

```
Docker-Composeのインストール（バージョンは適宜置き換え）
$ sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
バイナリの実行権限付与（？）
$ chmod +x /usr/local/bin/docker-compose
確認
$ docker-compose --version

Dockerユーザがすでに存在するか確認
$ cat /etc/group | grep docker
Dockerユーザに権限付与
$ sudo usermod -aG docker $USER
$ groups $USER

$ cd ~/projects/kintoneTest
$ docker-compose up -d
$ composer update (めっちゃ時間かかる)
```
