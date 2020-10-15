存在するときは、表示し、存在しないときは表示しないなどのよくある条件分岐を省略して書ける

```js
const data = getData() // {name:'hoge'} or undefined

const name = data?.name 
// 以下と同義
// const name = (data !== null && data !== undefined) ? data.name : undefined

const viewName = name??''
// 以下と同義
// const viewName = (name !== null && name !== undefined) ? name : ''
```
