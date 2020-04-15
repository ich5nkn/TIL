# JSXとは

React独自の記法でJSファイルの中に直接HTMLを記述する

拡張子は`.jsx`でも`.js`でも動く

HTML内にJSの変数や処理を埋め込みたいときは`{}`で囲む

他にもclassがclassNameになるなどの違いがあるので注意

# JSX内で条件によってHTMLの描画を変える方法

一番単純なのはフラグを作成して`&&`で繋ぎ、表示・非表示を切り替える方法

```
{displayFlg && <p>表示フラグが立ちました</p>}
```

falseのときも表示させたいなら三項演算子を使う

```
{isLoading ? <p>ロード中</p> : <p>ローディング完了！</p>}
```

# JSX内でループをする方法

JSX内でコンポーネントをループさせるにはmapなどを仕込んでループさせる

```
<ul>
  {this.state.datas.map((data) => {
    return <li>{data.text}</li>;
  })}
</ul>
```

FaceBook社などでよく使われているやり方で、先に配列に要素を追加する方法

```
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
