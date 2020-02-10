# Sass とは

CSSをより簡単に記述するための記法

入れ子や変数の利用などができる

SASS記法とSCSS記法があるが、SCSS記法がデファクト

ファイル拡張子は`.scss` になる

## 入れ子構造

セレクタの限定指定を入れ子にすることで何度もセレクタ名を記述しなくて良くなる

`:hover`のようにセレクタにコロンをつけて指定するものは`&`をつけて記述する

```scss
.header{
  width:100%;
  ul{
    padding:10px;
  }
  &:hover{
    background-color:#ccc
  }
}
```

## 変数

`$変数名:値;`で変数宣言と代入ができる

カラーコードなどを入れておくと便利

変数宣言した場所から下でしか使用できないため上部で宣言するのがよい

スコープも存在するので入れ子を使う場合は宣言する位置に気をつける

## @mixin

`mixin`を使うとcssのスタイルの塊を変数のように扱うことができる

`@mixin mixin名 { ... }`で定義し、`@include mixin名;`で呼び出す

`mixin`は引数をとることもできる

```scss
@mixin lesson-card($bg-color) {
  width:300px;
  padding:20px;
  background-color:$bg-color;
  border:1px solid #aaa;
  border-radius:10px;
}
.lesson-1 {
  @include lesson-card(#ebe);
}
.lesson-2{
  @include lesson-card(#eee);
}
```

## 関数

`sass`ではデフォルトで便利な関数が定義してあり、すぐに使うことができる

以下一例、８０個くらいあるらしい

### rgba($color,$alpha)

不透明度を設定できる、RGB表記`rgb(238,0,204)`ではなくカラーコード`#e00`で渡せるので便利

### mix($color1,$color2,[$weight])

２つの色を混ぜることができる、グラデーションなどに使う

`$weight`を省略すると`50%`になる

### lighten($color,$alpha) darken($color,$alpha)

明度を％指定で上げたり下げたりできる

### parcentage($number)

値の％を返す、式や変数を渡すこともできる

```scss
$parentWidth: 200px;
width: percentage(50px / $parentWidth);
// width: 25%;
```

### quote($string) unquote($string)

文字列のクオーテーション`"`を付けたり取ったりできる

## @import

`@import "ファイル名";` で外部のファイルを読み込んで変数を使うことができる

`import`元のファイルは名前の先頭に`_`をつける必要がある　例：`_colors.scss`

`import`するときのファイル名は`_`と`.scss`を省略することができる　例`@import "colors";`










