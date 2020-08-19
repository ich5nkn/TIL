## 課題

建物情報保存するTable(A)と建物の詳細情報を保存するTable(B)がある

`A.tm_no = B.tm_no`でリレーションをしている

ただし、Aには存在するが、Bには存在しない場合がある

Bに存在するときは、Bの値を、存在しないときは空で取得したいときはどうするか

## MAXを使う

```
SELECT A.tm_no,A.tm_name,MAX(B.jusho),MAX(B.zipcode) FROM TableA A,TableB B WHERE A.tm_no=B.tm_no;
```

こうすることで、実現できる
