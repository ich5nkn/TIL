# ObjectをforEachで繰り返し処理を行う

連想配列（Object)は普通の配列とは違い、使えないメソッドも多い

forEachでObject内の全ての要素に処理を行いたい場合、

`Object.keys(オブジェクト名).forEach((key)=>{ 処理 })`の形で出来る

```js
const obj = {key1:val1,key2:val2,key3:val3,}
Object.keys(obj).forEach((key)=>{
  console.log(key+'のvalueは'obj[key]);
})
```
