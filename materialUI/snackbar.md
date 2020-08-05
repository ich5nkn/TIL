ユーザのアクションに対するリアクションの通知などを行う場合に使用する

自動で表示して自動で消える通知を作成するときは[notistack(npm)](https://www.npmjs.com/package/notistack)を使う

使い方はこちら [[ リファレンス ]](https://iamhosseindhv.com/notistack/api)

クラスコンポーネントでは下記のように使う

```js
import { withSnackbar } from 'notistack';

type Props = { enqueSnackbar:Function }

@(withSnackbar as any)
export default class App extends React.Component<Props>{
  ...
  
  this.props.enqueSnackbar('メッセージ',{
    variant:'success', // snackbarの色
    autoHideDuration:6000, // 表示が終わるまでの時間
    preventDuplicate:true // 同じメッセージを連投しない
  })
  
  ...  
}

```
