### DOM操作でFocusを制御する

今回はReactのJSXで実装した

```js
<TextField
  id="barcode"
  onBlur={() => {
    if (!this.state.isPlayers && !this.state.isRegister) {
      (document!.querySelector('label[for="barcode"]')! as HTMLElement).click();
    }
  }}
  // ...props省略
/>

```

`onBlur`で、フォーカスが外れたときの動きを制御できる

`id`でこのDOMオブジェクトを特定できるので、クリックイベントで再フォーカスさせる

結果的にフォーカスがはずれないような動きが実現できる
