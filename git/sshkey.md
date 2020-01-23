# SSH

Gitを使うためにはSSHキーを登録する必要がある

GitLabとGitHubで同じSSHキーを使うことができる

# 登録方法

GitLub(Hub)の公式サイトにログインし、設定画面を開く

SSHの設定を開いて New SSH Key を押して登録する

SSHキーの作り方は `ssh-keygen -t rsa` ※上書きされるので注意

`pbcopy < ~/.ssh/id_rsa.pub` で中身をクリップボードにコピーして設定画面に貼り付ける

マシンごとに設定する必要があるので名前はマシンの名前をつけておくと監理しやすい
