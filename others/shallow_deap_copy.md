# シャローコピーとディープコピーについて

オブジェクト（配列など）をコピーする時の方法の違い

シャローコピーは浅いコピーで表面的なコピーである

```js
var arr = [1,2,3,4]
var arrCopy = arr
arr.push(5)

console.log(arr) // [1,2,3,4,5]
console.log(arrCopy) // [1,2,3,4,5]
```

コピーしてもarrとarrCopyは同じ配列を指すので変更がどちらにも反映される

これは、変数に格納されているのがオブジェクト本体ではなく、そのオブジェクトの座標だからである

C言語で言うところのポインタのようなもの

ディープコピーは別のオブジェクトを作成するコピーである

```js
var arr = [1,2,3,4]
var arrCopy = arr.slice()
arr.push(5)

console.log(arr) // [1,2,3,4,5]
console.log(arrCopy) // [1,2,3,4]
```

この場合はarrCopyは新しく生成された配列を指すのでarrの変更は反映されない

