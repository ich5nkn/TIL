# Hook（フック）とは

関数コンポーネントでしか使えない（クラスコンポーネントは不可）

関数コンポーネントにあらゆる機能を追加する

useStateフックを使えばStateが扱えるようになる

useEffectフックを使えばライフサイクルが使えるようになる

そのためクラスコンポーネントを使わずに関数コンポーネントで書ける

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

mount時、render後に毎回実行する

第２引数に配列を指定すると、render時に配列内の変数の値が変更されたときのみ実行する

使用するにはimportが必要

```js
useEffect (()=>{
    // render後に実行したい処理
},[useEffectに使いたい変数])
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

# useContext , createContext

Reduxのようなコンポーネントの親子関係を超えたstate管理ができる

App > ComponentA > ComponentB > ComponentC のような構造を想定する

それぞれ、子コンポーネントをimportしている

まずは親のAppで`createContext`を使い、Contextに名前をつけて定義し`export`する

次に、Contextを使用するコンポーネントを、命名したContext.provider配下に置く

そのときに、valueにstateとset関数を渡すと子でどちらも受け取れる

```js
// App
import React, {createContext, useState} from 'react'
import ComponentA from './components/ComponentA'

// ここでコンテキストをエクスポートする
export const UserContext = createContext()

const App = () => {
    const [user, setUser] = useState(undefined)

    return(
        <div className="App">
            // ここでプロバイダーで囲み、valueを渡す
            <UserContext.Provider value={[user,setUser]}>
                <ComponentA />
            </UserContext.Provider>
        </div>
    )
}
```

```js
// ComponentC
import React, {useContext} from 'react'
import {UserContext} from '../App'

const ComponentC = () => {
    const [user, setUser] = useContext(UserContext)
    
    if(user){
        return(
            <div>
                <p>{user.name}でログインしています</p>
                <button onClick={()=>setUser(undefined)}>
                    ログアウト
                </button>
            </div>
        )
    }
    
    return(
        <div>
            <p>ログインしてください</p>
            <button onClick={()=>setUser({name:hoge})}>
                ログイン
            </button>
        </div>
    )
}
```


