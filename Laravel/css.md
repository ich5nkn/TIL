# LaravelでのCSS読み込み

CSSを読み込むbladeファイルの`<head>`タグ内でHTMLのように記述する

`asset()`を使うとpublicディレクトリ内を指定してくれる

```
<link rel="stylesheet" href="{{ asset('css/app.css') }}">
```

# SASS

Laravelインストール時に生成される`app.css`はおそらくSASSでコンパイルされている

`app.css`に追加で記述しても更新するたびに消えてしまうのでSASSに記述するか別CSSを作成する
