# includes メソッド

対象の値が配列内に存在するかをチェックして論理値を返却するメソッド

[[ リファレンス ]](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

存在したときの値が知りたいときは`find`メソッド、そのインデックスが知りたいときは`findIndex`メソッドを使用する

### 完全一致でないとTrueが返却されない

部分一致や、型が違うとTrue判定にならない

Trueにならないときは型が原因かしらべる

型の調査には`typeof`メソッドを使用する
