# 印刷時のCSSを設定する

```
@media print {
  body:{
    width:210mm
  }
}
```

上記のように、`@media print`内でCSSを定義すると印刷時のみに適用される

印刷時のCSSのを確認したいときは、以下の手順で行える

- Chromeのデベロッパーツール起動

- 右上の三点リーダークリック

- More tools 内の Rendering を選択

- 下のところにRenderingのオプションを選択するタブが開くので下の方にスクロール

- Emulate CSS media type を `print`に変更する
