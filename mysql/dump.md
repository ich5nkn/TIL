## mysqlをdumpする

sequelProなどのUI管理ソフトからdumpが取れる

dumpする際は、テーブルの定義を含めると、テーブルの定義ごとインポートできる

コマンドで実行する場合は、mysqldumpコマンドを使用する（mysqlをインストールしてあれば入っている）

## mysqldump

```
mysqldump -u [ユーザ名] -p -h [host名] [DB名] > 出力先のパス
```

これで、DB内の全てのテーブルを定義つきでダンプできる [[ 他のコマンド一覧 ]](https://qiita.com/PlanetMeron/items/3a41e14607a65bc9b60c)

シェルスクリプト等で、パスワードの入力を省略したい場合は、`-p`の後に続けて入力する（スペースは空けない）

例

```sh
#!/bin/bash
# mysqlのパスワードがpasswordのとき
DATE=`/bin/date "+%y%m%d"`
mysqldump -u root -ppassword -h localhost myAppDB > ~/dump/$DATE.sql

# ７日前のダンプファイルを消す
DATE2=`/bin/date -d '7 days ago' "+%y%m%d"`
rm ~/dump/$DATE2.sql
```

### mysqldump 8 以降のとき

Macで試しに実行したところ、エラーが発生した（`Unknown table 'COLUMN_STATISTICS' in information_schema`）

mysqldump 8以降でそれ以前 (5.7とか) のMySQLサーバに対してダンプを実行したらこの問題が起こるらしい

`--skip-column-statistics`というオプションを付け加えることでダンプできた [[ 参考 ]](https://blog.pinkumohikan.com/entry/mysqldump-disable-column-statistics)

