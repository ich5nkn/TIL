### 以下、なんとなくのイメージなので間違っている可能性大

# Promiseとは

Jsの型のひとつで、処理を表す型

例えば、データベースから値をFetchしてくるなどの処理を変数に入れた場合、

その変数は値ではなく、Fetch処理（Promise型）そのものが入る

関数を変数に格納しているイメージに近い

データベースから取ってきた値を使用しようとしても、その段階ではデータを取得していないため使えない（非同期処理）

その値を使うためには、取ってきたあとに処理を書かなくてはならない（thenメソッドやasync/awaitを使う）

例

```js
const promise = fetch.get('hoge')
console.log(promise)
// Promise型のpromiseが表示される

const promise = fetch.get('hoge')
promise.then((res)=> console.log(res))
// Fetchした結果が表示される

const promise = await fetch.get('hoge')
console.log(promise)
// async/awaitで書くとこう（async function内が前提）
```
