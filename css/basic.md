# 書き方

タグにはドットをつけない、class名（自分で指定したもの）には先頭にドットをつける

```css
h1{
  color:red;
}
.title{
  color:blue;
}
```

`:hover`をつけるとマウスオーバー時のCSSを別に設定できる

`:active`をつけるとクリックされている間だけCSSを適用できる

`transition`を指定すると変化をゆっくりにしてアニメーションにできる

```css
div{
  background-color:white;
  transition:all 1s;
  /* 変化の対象 変化の時間 */
}
div:hover{
  background-color:red;
}
```

### padding margin

padding,marginの一括指定

`padding:20px` 上下左右20pxの余白

`padding:10px 20px 10px 20px` 上右下左の順に余白指定（時計回り）

`padding:20px 10px` 上下に20px、左右に10pxの余白指定

文字の間隔は`letter-spacing:5px` で指定

### border

`border:1px solid red` 太さ、種類（ドットなど）、色の順に指定する

`border-bottom:1px solid #333` 方向を指定してボーダーをつけることもできる

### box-shadow

`box-shadow:5px 10px #000000;` 水平位置、垂直位置、色の順に影を指定する

### background

`background-image:url(path)` で背景画像の指定ができる

`background-size:cover` で背景のサイズ（拡大・ループなど）が指定できる

### opacity

`opacity:0.3` 透明度を指定できる、０〜１の範囲で０に近いほど透明

### position

HTML要素同士は基本的に重ならないが、positionプロパティを変更すれば重ねれられる

`position:absolute; top:100px; left40px;` でサイトの左上を基準として絶対位置指定ができる

親要素に`position:relative;`と指定するとその要素の左上が基準位置となる

`position:fixed;`を指定すると常に表示領域の左上を基準として配置できる

重なり順は`z-index:10;`のように指定できる、数値が大きいほど上に重なって表示される

### cursor

`cursor:pointer` マウスオーバー時のカーソルの形（Iや指など）を指定できる

### float

ブロック要素は通常縦に並ぶ（改行される）が、`float`をつけることで回り込ませることができる

`float:left`と`float:right`で同じ高さの左右にブロックを配置することもできる

`float`は整列によく使うが、指定したブロック要素を宙に浮かせて配置するという意味なのでレイアウトが崩れやすい

例えば子要素がすべて`float`指定してあるときは親要素の高さは０になる（子要素が収まっておらず、浮いているため）

これを解消するためにHTMLに`<div class="clear"><div/>` というように空のタグを用意して、

CSSに`.clear{ clear:left(or both); }`と記述して解除するテクニックが使われる

### !important

スタイルの指定の後ろに`!imoprtant`とつけることでそのスタイルを優先的に適用させることができる

乱用は非推奨だがどうしてもスタイルを適用させたい場合の最終手段に使う

