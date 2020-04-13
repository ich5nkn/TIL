# git stach とは

一時的にstash領域に退避することができる

ローカルのmasterを進めてしまって、リモートのmasterをpullできないときなど

`git stash save -u`でスタッシュに保存

`git stash list`でスタッシュを確認することができる

退避できたらpull出来るようになるので普通に`git pull`

`git stash pop`でスタッシュを元の場所戻す（コンフリクトが起きることもある）

