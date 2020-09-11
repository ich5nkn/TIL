# filterの使い方

配列を１件ずつ条件で除外する

```js
Array.filter((val)=>{
  if(val.isDelete === true){
    return false; // skip
  }
  return true;
})
```

のように使用し、戻り値がtrueならそのまま、falseなら除外される

# 使用例

mapで配列を整形コピーする際に、特定のレコードを除外したいケースがあり、仕様した

```js
Array.filter((val)=>{
  if(val.isDelete === true){
    return false; // skip
  }
  return true;
}).map((val)=>{
  return({
    'id':val.id,
    'name':val.name,
  })
})
```

このように、直後にmapを連結させることができるので便利

ちなみにfilterを使わずに、map内で条件外のレコードは`return null;`とすると

`[{id:1,name:'taro'},null,{id:3,name:'hana}]`のような配列ができてしまう
