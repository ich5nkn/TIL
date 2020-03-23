# display:flex

コンポーネントを横に並べて配置する

### 親コンポーネント

- `display:'flex'`
  - これを指定することでflex配置になる（？）
  
- `flex-wrap:'wrap'`
  - これを指定すると回り込み解除ができる
  - 初期値だと子コンポーネントが回り込む
  
- `aline-content:'center'`
  - 複数行ある際に縦位置を中央に揃える

- `justify-content:flex-start`
  - 横揃えを指定する
  - 左寄せは`flex-start`で右寄せはend
