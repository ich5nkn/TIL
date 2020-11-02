## react-router-dom を使用しているときにPropsに型を付ける

react-router-domを使用すると、`app.tsx`に`<Router>`を定義する

各ページコンポーネントは`app.tsx`からルーティングされ、match,location,historyの３つのpropsが渡される

ページの遷移などに使用するため受け取る必要がある、例：`props.history.push('/')`

### 型を指定する方法

```ts
import { RouteComponentProps } from 'react-router-dom'
const Home = (props: RouteComponentProps): JSX.Element => {
  // 省略
  return (
        <>
            {loading ?
                <div>
                    <button onClick={() => { props.history.push('/test') }}>ページ遷移</button>
                    <button onClick={logOut}>ログアウト</button>
                </div>
                :
                <CircularProgress />
            }
        </>
    )
}
```

このように`RouteComponentProps`を指定することで解決

### 型を拡張する場合

ページ内で、router以外のPropsを使用したい場合が出てくる

その場合は、以下のようにTypeを拡張する

```ts
interface Props extends RouteComponentProps<{}> {
  id:number
}

const Home = (props: Props): JSX.Element => {
  // 省略
```
