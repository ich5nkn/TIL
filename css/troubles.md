# Headerの上に意図しない余白がある

ブラウザのもともとの設定で画面ぴったりに表示させないようになっている

cssに `*{margin:0;padding:0;}`を指定しておくことで解決

# 画像の中心に文字を重ねたい

重ねるのは`position`の`relative`(親)と`absolute`(子)でできるが

絶対位置参照になってしまうので中心に表示させるのが難しいが下記のようにすれば解決した

```css
/*子要素に指定*/
width:100%;
text-align:center;
top:50%;
left: 50%;
transform:translate(-50%,-50%)
```

# Borderを上下だけに付けたい

ボーダータイプ・色の指定と太さの指定を分けることで実現

```css
border:solid #000;
border-width: 5px 0 5px 0;
```

# Listの行頭に任意の文字（記号）を挿入したい

::beforeでcontentを指定することでCSSから行頭に文字を挿入できる

`li-mark::before{ content:"☆"; }`

# 横並びのリストを線で区切りたい

`リスト１ | リスト２ | リスト３ | リスト４`のような形にしたい

隣接セレクタを使い、連続するときだけボーダーを挿入する

`li+li{ border-left:1px solid #DDD; }`