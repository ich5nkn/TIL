# slice(start,end)

start〜endの範囲で配列や文字列のコピーを生成する

コピーを生成するため元の値は変更されない

`copyArr = arr.slice()`のように引数未指定でコピー生成のような使い方もできる

ただし、`slice`で複製できるのは１次元配列のみ・・？ [参考](https://qiita.com/GodPhwng/items/d7bc022dd12fde4cab63)

[シャローコピーとディープコピー](https://kurochan-note.hatenablog.jp/entry/20110316/1300267023)の違いらしい [参考](https://maku77.github.io/js/array/slice.html)

解決策は、mapで配列の要素ごとにコピーを作成する

```javascript
// squaresは二次元配列

// シャローコピーになる
const squares = current.squares.slice();
// ディープコピーになる
const squares = current.squares.map(ary => ary.slice());
```
