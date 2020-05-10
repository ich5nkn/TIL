# Propsの受け渡し

子にPropを渡すときは {...state}で渡すといちいち全部書かなくて良い

# 真偽値の受け取り

親が真偽値を取るときは子のコンポーネントでそのPropを指定するとTrueになる（ =trueと書かなくて良い）

```js
// 親コンポーネント

export default function Parent({children, title, redTitle}){
  return(
    <div>
      {redTitle?<h1 style={{color:red}}>{title}</h1>
      :<h1>{title}</h1>
      }
      {children}
    </div>
  )
}
```
```js
// 子コンポーネント
import Parent from './parent.js'

export default class Child(){

  const title = 'Red'

  return(
    <Parent title={title} redTitle>
      {"contents"}
    </Parent>
  )
}
```
