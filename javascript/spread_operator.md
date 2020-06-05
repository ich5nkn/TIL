# スプレッド演算子とは

配列やオブジェクトの中身を一気に展開する際に用いる記法

```js
const obj = {a:'testA',b:'testB',c:'testC'}
const objCopy = {...obj}

console.log(objCopy)  // {a:'testA',b:'testB',c:'testC'}
```

# 一部を除外する

```
const obj = {a:'testA',b:'testB',c:'testC'}

const {b:_,...exclusionB}=obj

console.log(exclusionB) // Object { a: "testA", c: "testC" }
```

正直よく意味が分かっていないが使いこなせたら便利そうなので調べてください（執筆時は忙しい）
