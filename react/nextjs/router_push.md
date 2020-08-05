# Router.push()

画面を遷移させる関数

第一引数に、nextのルーティングに基づくパス（ディレクトリ構造とファイル名による指定）を行う

ファイル名を`[key].page.tsx`のように`[ ]`をつけて作成すると、URLの値を取得することができる

第二引数には、ブラウザのURL欄に表示するURLを記述する（上記のパラメータの受け渡しをする場合はここで指定する）

第一引数をオブジェクトにして、クエリストリングを含めることもできる

```js
// Sample

Router.push('/people');
Router.push('/people/[id]',/'people/'+this.state.id); // dynamicRouting
Router.push({pathname:'/people', query:{id: this.state.id}},'/people') // queryString(silent)

```
