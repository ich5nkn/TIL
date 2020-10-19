# docker ps でコンテナ名だけを取得する方法

行が長くなると改行されて見づらい、どのコンテナが起動しているかだけを確認したい場合に使用する

```
docker ps --format "{{.Names}}"
```

[[ 参考 ]](https://qiita.com/sakymark/items/6d69ba3d76a1bfc66967)
