テーブルの内容を削除しつつ、初期状態（テーブルが生成された状態）に戻す

ただ、リレーションしてあるテーブルだとトランケートできない場合もある

その場合は、テーブルの中身を全削除して、`auto_increment`を1にする

```
delete from hogehoge;
alter table hogehoge auto_increment = 1;
```
