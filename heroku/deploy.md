# Herokuとは

ホスティングサービス

GitのリモートリポジトリとしてHerokuを指定すればpushするだけでデプロイされる

DBをクラウド化しておけば、そのまま使える

MySQLも使えるらしい [[参考 Qiita]](https://qiita.com/koukidesu/items/2115a50569e6519832da)

# デプロイ手順

### Herokuアカウント作成

クレジットカードを登録すればサーバの立ち上げ時間が伸びる

### Heroku CLIのインストール

`brew tap heroku/brew && brew install heroku`

### Herokuログイン

`heroku login` ブラウザを開いてログインする

### Herokuプロジェクトの作成

公式サイトの管理画面からプロジェクトを作成する

### git remote にherokuを追加

`heroku git:remote -a [herokuProjectName]`

### プロジェクトをherokuにプッシュ

`git push heroku master`

浄化槽ではherokuにプッシュしたら自動でbuild & startするように設定してある
