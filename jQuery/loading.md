## jQueryの使い方

jqueryを使用したいファイルでインポート

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

jQueryの記述は`<script>`タグ内で行う

## jQuery読み込み後に行う関数

```html
<script>
  jQuery(function(){
    // 読み込み後に実行したいソースを表示
  })
</script>
```

このように記述すると、jQueryを読み込んだあとに実行させることができて安全
