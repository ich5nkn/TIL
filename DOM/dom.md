# DOMとは

ドキュメント・オブジェクト・モデルの略

HTMLやXML文書を操作するための規則の集合体のこと

階層構造である？

正直わからん？？

# JSからのDOM操作の例

Chromeデベロッパーツールのconsoleを開く

```
var h2s = document.getElementsByTagName('h2');
h2s.length
h2s
```

`getElementsByTagName`メソッドでページ内のh2タグを全て取得し返す

取得した内容はJavaScript側で自由に使うことができる

[[参考サイト]](https://eng-entrance.com/what-is-dom)
