# gitの基本操作

### git init

git管理していないディレクトリで実行する

自動でgitファイルを生成・初期化してくれる

masterブランチが作られる

### git remote add origin (リモートリポジトリURL.git)

リモートリポジトリ（GitHubなど）と連結させる

originという名前で追加するのが一般的だが別の名前でもいけるはず（やってない）

### git status

現在のgitのステータスを確認する

コミットするファイルの有無、git管理外のファイルの有無、リモートとの差分などが分かる

困ったらやってみるとどのコマンドを使えばいいか教えてくれることも

### git diff

現在の変更履歴・変更箇所を表示してくれる

### git add (ファイル名)

指定したファイルをgit管理下に置く

ファイルを新規作成した場合まずはaddしないとcommitできない

### git commit

現在までの変更をcommit(確定)できる

commitメッセージを求められるので入力する

`git commit -m (commit-message)` でメッセージの入力を１行で書ける

`git commit -a` をすると新規ファイルのaddも自動でやってくれる

### git log

コミットのログとコミットメッセージを見れる

`-p` をつけると変更内容を確認できる

### git merge (FROM)

FROMのコミットを現在のブランチにマージする

### git push (TO) (FROM)

FROMの変更コミットをTOにpushする

`git push -u origin HEAD` でHEADをoriginにpushすると記憶させ次回以降省略できる

### git fetch

リモートリポジトリの情報をもってくる

### git pull

リモートリポジトリから最新の状態をプルできる

プルは`fetch + merge` を同時にやっているようなもの

### git branch

現在のローカルブランチの一覧を表示する

### git branch -d [ブランチ名]

対象のブランチを削除する（マージ済みであることが条件）

### git branch -D [ブランチ名]

無条件に対象のブランチを削除する

