RenderでのsetStateを実行すると無限ループになってしまうため、エラーになる

setStateを実行するという関数を渡せば問題はない

また、親子コンポーネントで、子供のPropsに親のSetStateを渡すという場合でも発生する

子供側で即時関数の中で使用すればよい

```js
type Prop = {
  func:VoidFunction
}

export default class Form extends React.Component<Props>{

  render(){
    return(
    
      <Button onClick = {this.prop.func}>
        Error
      </Button>
      
      <Button onClick = {()=>this.prop.func()}>
        Good
      </Button>
    
    )
  }

}
```
