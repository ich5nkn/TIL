# Couldn’t connect to Docker daemon

テストサーバで `docker-compose up -d` を実行したところこのエラーが出た

意味はデーモンに接続できません

調べたら権限の問題だった

sudoをつけることで解決

# sudoをつけなくても良くする

毎回 sudo をつけるのは面倒なため、permissionを修正

```
# dockerグループがなければ作る
sudo groupadd docker

# 現行ユーザをdockerグループに所属させる
sudo gpasswd -a $USER docker

# dockerデーモンを再起動する (CentOS7の場合)
sudo systemctl restart docker

# exitして再ログインすると反映される。
exit
```
