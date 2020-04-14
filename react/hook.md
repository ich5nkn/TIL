# Hook（フック）とは

関数コンポーネントでしか使えない（クラスコンポーネントは不可）

関数コンポーネントでクラスの代わりに書くもの、Stateを関数で扱えるようになる

# useState

stateの初期値を引数に取り、stateとそれを更新する関数のセットを生成する

```
const [count, setCount] = useState(0)
```

これで値が0のcountというstateが生成される、countはstateなので直接更新せずにsetCountで更新する

```
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

```
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

# useEffect

クラスのcomponentDidMountなどに相当する

### 正直良く分からない
