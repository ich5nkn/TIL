# bindとは

束縛という意味、関数のthisの値を束縛して関数を複製できる

元の関数がbindできるように作成されている必要がある（thisを使ってある）

引数であれもこれも設定できる関数は、ほぼ同じ設定しか使わないのに毎回指定するのは面倒

その場合、thisの値を参照するように変更し、bindした関数を生成すると便利に使えるようになる

# 例

```js
// bind元関数、this.colorがnullなら黒字で名前を表示する
const prevName = (name) => {
  const color = this.color == null ? '#000' : this.color
  return <p style={{color:color}}>{name}</p>
}

// prevNameのthis.color青で縛って、青色の名前を表示する関数を作成
const prevMansName = prevName.bind({color:'#00f'})

prevMansName('taro') //taroと青で表示される
```

# 参考

[[jsのbindは意味がわからない(Qiita)]](https://qiita.com/__mick/items/4ad701e8d7742fcda7d8)

