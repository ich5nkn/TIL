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

`::before`で`content`を指定することでCSSから行頭に文字を挿入できる

`li-mark::before{ content:"☆"; }`

List以外のh2などをデコりたいときにも使えた、`background`指定で画像も使える

```css
.title-deco::before{
  content:'';
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(hogehoge.png) no-repeat 50% 50% ; 
  margin-right:5px;
}
```

# 横並びのリストを線で区切りたい

`リスト１ | リスト２ | リスト３ | リスト４`のような形にしたい

隣接セレクタを使い、連続するときだけボーダーを挿入する

`li+li{ border-left:1px solid #DDD; }`

# 数秒置きに画像の表示を切り替えたい

`@keyframes` と `animarion prop`を使う

`@keyframes`でどんなアニメーションにするかを指定

実際にアニメーションを付けたいセレクタ（今回は画像達）でpropを指定

```css
/* 今回作成した５枚の画像をフェードで切り替えるアニメーション */
/* アニメーションの進行度合いに紐付いて状態を指定する */
/* 透明→フェードイン→表示→フェードアウト→透明→透明のまま１周するまで待機 */
@keyframes imagechange{
    0%{opacity: 0;}
    2%{opacity: 1;}
    18%{opacity: 1;}
    20%{opacity: 0;}
    100%{opacity: 0;}
}

.animeimg{
    /* 使用するkeyframe名を指定（必須） */
    animation-name:imagechange;
    /* １周あたりの秒数を指定(必須) */
    animation-duration: 20s;
    /* アニメーションの実行速度を調整（今回は一定） */
    animation-timing-function: linear;
    /* 指定した時間アニメーション開始タイミングを遅らせる */
    animation-delay: 0s;
    /* アニメーションを何回実行するか（今回は無限） */
    animation-iteration-count: infinite;
    /* アニメーション開始前後の状態指定（今回は状態維持） */
    animation-fill-mode:both;
}

/* ２枚目〜５枚目の画像表示を４秒ずつ遅らせることで順に表示する */
.img2{
    animation-delay: 4s;
}
.img3{
    animation-delay: 8s;
}
.img4{
    animation-delay: 12s;
}
.img5{
    animation-delay: 16s;
}
```

[参考](https://qiita.com/7968/items/1d999354e00db53bcbd8) / 
[参考](https://www.webcreatorbox.com/tech/css3-animation-colour)
