# スプレッド構文

配列やオブジェクトの中身を一気に展開する際に用いる記法

```js
const obj = {a:'testA',b:'testB',c:'testC'}
const objCopy = {...obj}

console.log(objCopy)  // {a:'testA',b:'testB',c:'testC'}
```

一部だけを書き換えたい場合は、スプレッド構文で展開した後に、上書きする
```js
const obj = {a:'testA',b:'testB',c:'testC'}
const objCopy = {...obj,b:'newB'}

console.log(objCopy)  // {a:'testA',b:'newB',c:'testC'}
```

# 分割代入構文

配列の場合並び順のまま代入される

```js
const arr = [A,B,C,D,E]
const [a,b,c,d,e] = arr

console.log(a) // A
```

オブジェクトの場合、keyに対応して代入される

```js
const obj = {a:'testA',b:'testB',c:'testC'}
const {a:sa,b:sb,c:sc} = obj

console.log(sa) // testA
```

スプレッド構文で残りの値を一気に変数に変数に格納することが出来る

```
const obj = {a:'testA',b:'testB',c:'testC'}
const {b:_,...exclusionB}=obj

console.log(exclusionB) // Object { a: "testA", c: "testC" }
```

`obj.b`を`_`に格納（使用しない）して残りを`exclusionB`に格納することで、`obj.b`を除いたオブジェクトを作ることが出来る
