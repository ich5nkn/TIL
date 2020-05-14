# マイグレーションとは

modelsを定義することで勝手にDBのテーブルを作ってくれる

# 実行方法

マイグレーションファイルを生成

`yarn ts-node ./node_modules/.bin/typeorm migration:generate --name init`

TypeScript環境で実行しないといけないので`ts-node ~~`が必要

`orm/migrations`にマイグレーションファイルが生成される

マイグレーションを実行

`yarn ts-node ./node_modules/.bin/typeorm migration:run`

DBにテーブルが自動生成される
