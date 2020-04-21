# JSXとは

React独自の記法でJSファイルの中に直接HTMLを記述する

拡張子は`.jsx`でも`.js`でも動く

HTML内にJSの変数や処理を埋め込みたいときは`{}`で囲む

他にもclassがclassNameになるなどの違いがあるので注意

# JSX内で条件によってHTMLの描画を変える方法

一番単純なのはフラグを作成して`&&`で繋ぎ、表示・非表示を切り替える方法

```js
{displayFlg && <p>表示フラグが立ちました</p>}
```

falseのときも表示させたいなら三項演算子を使う

```js
{isLoading ? <p>ロード中</p> : <p>ローディング完了！</p>}
```

# JSX内でループをする方法

JSX内でコンポーネントをループさせるにはmapなどを仕込んでループさせる

```js
<ul>
  {this.state.datas.map((data) => {
    return <li>{data.text}</li>;
  })}
</ul>
```

FaceBook社などでよく使われているやり方で、先に配列に要素を追加する方法

```js
render: function(){
  var list = [];

  var data = [
    { text: "1" },
    { text: "2" }
  ];

  for(var i in data){
    list.push(<li>{data[i].text}</li>);
  }

  return(
    <ul>
      {list}
    </ul>
  );
}
```

# inputコンポーネントのチェックボックス

HTMLの`<input　type="checkbox">`では、初期値の指定に`checked`を使うが、

reactでは`checked`は現在のチェック値(bool)であり、初期値は`defaultChecked`を使うので注意

`checked={true}`としてしまうと、チェック済状態から切り替わらなくなってしまう

`checked`にチェック値を管理するStateを設定して`onClick`などで切り替えるのが一般的?
