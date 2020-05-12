# remoteの変更

GitLabで監理していた個人プロジェクトをGitHubに移行したときのメモ

対象リポジトリで `git remote set-url origin ssh://git@github.com/kogaya/hoge.git`

リモートの書き換えが終わったらプッシュ `git push origin -all`

最初、GitHubのSSHURLは`github.com:kogaya` というようにスラッシュがコロンになっていたためうまくいかなかったので注意

originを書き換えるのではなく、新しい名前をつけてリモートリポジトリを増やすことも可能

`git remote`でリモートブランチ一覧を確認できる
