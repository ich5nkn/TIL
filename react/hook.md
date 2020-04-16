# Hook（フック）とは

関数コンポーネントでしか使えない（クラスコンポーネントは不可）

関数コンポーネントでクラスの代わりに書くもの、Stateを関数で扱えるようになる

# useState

stateの初期値を引数に取り、stateとそれを更新する関数のセットを生成する

```js
const [count, setCount] = useState(0)
```

これで値が0のcountというstateが生成される、countはstateなので直接更新せずにsetCountで更新する

```js
return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
```

ボタンをクリックするたびにcountの値が1ずつ増えていく

またuseStateは関数の中でしか使えない、使うにはimportする必要がある

完成形の全体図

```js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

stateの更新関数内でstateを使用するときは、更新関数の中身を関数で書いたほうが安全

```js
// 例
setCount(count + 1)
// 中身を関数にする
setCount(count => {count+1})
```

setCountがループの中で呼び出されている場合、countの値はループが呼ばれたタイミングの値であるから



# useEffect

クラスのcomponentDidMountなどに相当する

使用するにはimportが必要

```js
useEffect (()=>{
    // render後に実行したい処理
})
```

uesEffectに記述した内容はrender後に実行される

asyncを直接使うことは出来ない

```js
useEffect (()=>{
    const func = async()=>{
        await setJson(props.json)
        console.log(json)
    }
    func()
})
```

このようにasyncを使う関数を定義して実行する必要がある
