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

### border

`border:1px solid red` 太さ、種類（ドットなど）、色の順に指定する

`border-bottom:1px solid #333` 方向を指定してボーダーをつけることもできる

### background

`background-image:url(path)` で背景画像の指定ができる

`background-size:cover` で背景のサイズ（拡大・ループなど）が指定できる

### opacity

`opacity:0.3` 透明度を指定できる、０〜１の範囲で０に近いほど透明

