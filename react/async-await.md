# async/await とは

JavaScriptは基本的に非同期処理（順番を無視してできる処理からやっていく）

しかし、同期処理を行いたい時がある（順番に処理）

そういうときに使える

# 使い方

関数の前に`async`をつけるとasyncファンクションになる

asyncファンクション内の処理に`await`を記述するとそこから下の処理はその処理が終わるまで実行されない

```js
// 例
const fnc = async()=>{
  await this.setState({text:'TEST'})
  console.log(this.state.text)
}
// async/awaitが無いとsetStateの更新より前にconsole.logが動いて`TEST`と表示されない
```
