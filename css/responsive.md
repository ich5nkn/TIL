# レスポンシブデザイン対応

### viewport

HTMLのheadタグでCSSを読み込む前にviewportを埋め込む

これがないとスマホやタブレットで閲覧時にメディアクエリが正しく機能しない

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### media

`@media(max-width:670px){ ... }` で画面幅670pxが670px以下のときのCSSを指定できる

スマホ表示のとき`.item { width:100% }` のように書くことで縦並びにするなどの対応が可能になる

### box-sizing

`box-sizing:border-box` を指定すると`width`の指定に`padding`と`border`の幅が含まれるようになる

４つ横に並べる際に`padding`を考えずに`width:25%`で指定すれば良いので便利

基本的に`*{ box-sizing:border-box; }`で全体に適用しておく

### max-width

`max-width`を指定すると最大値をpx指定で設定することができる

`width:100%`と併用することで指定した`max-width`以下は最大、超えると指定した値までの幅で表示できる

### display (none)

`display:none`を指定すると特定の要素を非表示にすることができる

`@madia`や`display:block`と組み合わせることでスマホのときは表示/非表示にするなどの設定ができる

例：スマホ時はヘッダメニューを非表示にして代わりに三本バーメニューを表示させる

### overflow (auto)

テーブルの表示をスマホ時だけスクロールさせる際などに使用する

tableの親要素に`overflow:auto`を指定

tableに`minWidrh`で最小幅を指定すると、その幅より画面が小さい場合、スクロールできる

ただし、親要素の幅を明確に指定してやる必要があり、`width:100%`などにしている場合、祖要素などの幅も気にする必要がある

[[ 参考 ]](https://webcommu.net/phone-table-scroll/) [[ 参考２ ]](https://b-risk.jp/blog/2018/07/table-css/)


