# ブロック要素とインライン要素

ブロック要素（div,h1など）とインライン要素（span,aなど）はいくつか違いがある

ブロック要素は初期状態で親要素の幅いっぱいに広がる

ブロック要素は初期状態で配置が縦並びになる

ブロック要素は`margin 0 auto`で中央寄せにする

インライン要素はwidthやheightが指定できない

インライン要素はmarginとpaddingが左右のみしか指定できない

インライン要素は配置が横並びになる

インライン要素は`text-align:center`で中央寄せにする

CSSの`display`プロパティで要素の変更ができる（インラインブロック要素も指定できる）

インラインブロック要素はインライン要素にheight,widthの概念を足したもの

# クラスの指定

タグ内に`class="xxx"`と記述することでクラスの指定ができる

`class="xxx yyy"`と記述すれば２つ以上のクラスを同時に指定できる

# idの指定

タグ内に`id="xxx"`と記述することでidの指定ができる

CSSに`#xxx { ... }`と書くとクラスと同じようにスタイルの記述ができる

idとclassの違いは一意に指定できるかどうか

idはHTML内に同一の名前をつけることができない

そのためページ内リンクにも用いられる `<a href="#xxx">`

# 条件付きコメント

HTML5では特定のブラウザのときのみ発動するコメント文を記述することができる

例 (wpのheader.php)

```
<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
```

# linkタグ

linkタグはパーマリンク`<a href="~">`とは違い、ブラウザへ向けて書くリンクのタグ

ブラウザや検索エンジンに対しての記述なので`<head>`内に記述する

`<link rel="xxx" href="~" />`が基本形で、`rel`にファイルの種類、`href`にパスを記述する

### CSSの指定

`<link rel="stylesheet" href="style.css">`

### ファビコンの設定

```
<link rel="icon" href="画像のURL" sizes="32x32" />
<link rel="icon" href="画像のURL" sizes="192x192" />
<link rel="apple-touch-icon-precomposed" href="画像のURL" />
```

`apple-touch~`はスマホでホームにショートカットを生成したときのアイコン（150x150程度のpng推奨）

### 正規URL

`<link rel="canonical" href="正規ページのURL">`

内容が重複するページが生まれた場合に重複ページでSEOが下がるのを防ぐ

