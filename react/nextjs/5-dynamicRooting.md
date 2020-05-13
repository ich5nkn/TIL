# 動的ルーティングとは

Next.jsでは`<Link>`コンポーネントでページの静的なルーティングをすることができる

ファイル名を`name[id].js`のようにすることで、`/name/id`（idは任意の値）の形で動的なルーティングができる

# getStaticPathsとgetStaticProps

`name[id].js`の中で上記２つのメソッドを定義する必要がある

`getStaticPaths`は`id`に入り得る値の配列と`fallback`returnする

```js
export async function getStaticPaths(){
  // 入りうるidの一覧を取得するメソッド
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
```

`fallback`についてはfalseにすると`id`の一覧に存在しない`id`にルーティングしたとき404になる

trueにすると存在しない場合の挙動を制御できるらしいが、今回は省略 [詳しくはこちら](https://nextjs.org/docs/basic-features/data-fetching#fallback-pages)

`getStaticProps`は`params`を引数に取り、受け取った`params.id`（urlのidの部分）を使い、記事のデータを取得しPropsにセットしている

```js
export async function getStaticProps({ params }){
  // idを指定して記事の内容を取得するメソッド
  const postData = await getPostData(params.id)
  return {
    props:{
      postData
    }
  }
}
```
