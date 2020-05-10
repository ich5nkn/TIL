# レンダリングのタイミング

Nextでは下記の３つのタイミングでのレンダリングを任意で設定することができる

設定はページごとに行える（このページはプリレンダ、このページはSSRなど）

- ビルド時にレンダリングを行うプリレンダリング（静的レンダリング）

- リクエストが発生した際にサーバ上でレンダリングを行うサーバサイドレンダリング

- クライアント側でレンダリングを行う(通常のJSと同じタイミング)

# プリレンダリング

基本的に何も触らなければ静的なファイルは自動でプリレンダリングされる

外部データを読み込む場合も`getStatucProps`メソッドを使えばプリレンダリング可能

ただし、APIなど頻繁に更新されるデータに対しては向かない（ビルド時にレンダリングしてしまうため更新が行えない）

### 使い方

```
import {dataGetter} from '../lib/datas' // データを取得するメソッド （中身は省略）

// getStaticPropsメソッド
// dataGetterの返り値（外部データ）をPropsにセットする
export async function getStaticProps(){
  const data = dataGetter()
  return{
    props: {
      data
    }
  }
}

// propsにセットしたdataをコンポーネント内で使う
export default function Page({data}){
  <div>{data}</div>
}
```

[getStaticPropsのリファレンス](https://nextjs.org/docs/basic-features/data-fetching)
