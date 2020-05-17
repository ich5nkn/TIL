# Next.jsでのAPIの扱い方

Next.jsではpages内にファイルを置くと自動的にルーティングされるので、APIエンドポイトもpages内に作る

`pages/api/hello.js`に以下のファイルを作成する(ディレクトリ名はapiでないといけない)

```js
export default (req, res) => {
  res.status(200).json({ text: 'Hello' })
}
```

`~~/api/hello`にアクセスすると`{"text": "Hello"}`と表示される

ここで、`export default (req, res) => { ... }`はNode.jsの書き方と同じ？（express?）

# reqについて

reqではAPIリクエストを受け取る

例えば`req.method`には、HTTPメソッド（`GET`や`POST`など）が入ってくる

`req.query`でクエリ文字列を取得することができる

`POST`リクエストの場合、`req.body.hoge`でリクエストの中身を取得し、DB保存などの処理をすることができる

# resについて

resではAPIレスポンスを定義することができる

### `res.status(code)`

`code`には有効なHTTPステータスを記述する（200→OK）など

### `res.json(json)`

`json`にjsonオブジェクトを入れるとJSON応答をするAPIになる

### `res.send(body)`

`body`に任意のBodyを指定してHTTP応答をさせることができる

`body`に指定できる型は、`string`,`object`,`Buffer`

# APIの注意点

`getStaticProps`や`getStaticPaths`からAPIをフェッチしてはいけない

静的レンダリングはビルド時にサーバサイドでのみ行われるため、クライアントサイドで実行できない

APIルートは通常のページのように動的なものにすることができる　[[リファレンス]](https://nextjs.org/docs/api-routes/dynamic-api-routes)
