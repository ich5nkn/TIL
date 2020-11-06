coreパッケージには含まれていないが、日付選択のコンポーネント

[[リファレンス]](https://material-ui-pickers.dev/api/DatePicker)

ブラウザネイティブの表示とReactで実装されたUIの表示のどっちを標準とするかって事で外部化されたらしい

`orientation`の`prop`に`'portrait'`を明示的に指定することでタイトルバーの位置を制限できる

### GetStart

インストール時に若干の設定が必要

`date-fns`や`moment.js`など、日付管理ライブラリが必要なため、入っていなかったら入れる

```
yarn add date-fns
yarn add @material-ui/pickers @date-io/date-fns@1.x
```

`App.tsx`などの、最上位でプロバイダーを設定する必要がある

```jsx
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Root />
    </MuiPickersUtilsProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
