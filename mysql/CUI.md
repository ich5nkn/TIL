# MySQLへの接続

`mysql -u root -p` でパスワードを入力すれば接続できる

`-u`はユーザ名を指定するオプション、`-p`はパスワード入力の対話をするオプション

Localで立てているのにsocketへの接続をしようとする場合は`-h localhost`を指定するか、

ホームディレクトリに`.my.cnf`という名前で以下の内容のファイルを生成する

```
[client]
port=3306
protocol=tcp
```

パスワードに関してはdockerを使っている場合はdockerFile及びdocker-composeファイルに書いてある

違うportが指定してある場合は合わせて変更する

# MySQL内の操作

MySQLでのコマンドは行末にセミコロンをつけないと実行されない

### 切断・ヘルプ

`quit`、`help`

## ユーザの操作関連(rootログインが必要)

### ユーザ情報取得

`SELECT Host,User,Password FROM mysql.user;`

### ユーザの追加

`create user 'ユーザ名'@'localhost' IDENTIFIED BY "password";` 'はバッククオート

## データベース操作関連

### データベース一覧表示

`show databases;`

### データベース追加

`create database [データベース名];`

### データベースの選択

`use [データベース名];`

## テーブル操作関連（DB選択後）

### テーブル一覧表示

`show tables;`

`show table status;`

### テーブル作成

```
mysql > CREATE TABLE [テーブル名] (
  [フィールド名] [データ型] [オプション]
) ENGINE=[InnoDB/MyISAM] DEFAULT CHARSET=[文字コード];
```

＜サンプル＞
```
mysql > CREATE TABLE `m_users` (
          `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT "ID",
          `user_name` VARCHAR(100) NOT NULL COMMENT "ユーザー名",
          `mail_address` VARCHAR(200) NOT NULL COMMENT "メールアドレス",
          `password` VARCHAR(100) NOT NULL COMMENT "パスワード",
          `created` datetime DEFAULT NULL COMMENT "登録日",
          `modified` datetime DEFAULT NULL COMMENT "更新日"
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### テーブル削除

`DROP TABLE [テーブル名]`

### テーブル名の変更

`ALTER TABLE [旧テーブル名] RENAME [新テーブル名]`

### テーブル設計の確認

`desc [テーブル名]`

### テーブルにカラムの追加

`ALTER TABLE [テーブル名] ADD [追加カラム名] [型] [オプション]`

## レコード操作関連

### レコードの追加

`INSERT INTO [テーブル名] [フィールド名] VALUES [値]`

＜サンプル＞

```
mysql > INSERT INTO m_users (user_name, mail_address, password, created, modified)
          VALUES ("Qii Taro", "qiitaro@hoge.com", "123123", now(), now())
```

### 更新

UPDATE [テーブル名] SET [フィールド名]=[値] [条件式]

```
mysql > UPDATE m_users SET user_name="Qii Takao", mail_address="qiitakao@hoge.com" 
          WHERE id = 5;
```

条件式なしだと全レコードが更新の対象になる、カンマ区切りで複数フィールド更新できる

### 削除

`DELETE FROM [テーブル名] WHERE [条件式]`

条件式なしだと全レコードが削除される
