# リレーションの設定の仕方

リレーションの設定には以下のデコレーターを使う

- `@OnetoOne` (１対１)

- `@OnetoMany` `@ManytoOne` (1対多)

- `@ManytoMany` (多対多)

１対多の接続の場合、外部キーを所有するテーブルで`@JoinColumn`を指定する（テーブルをJoinさせる際の設定）

多対多の接続の場合、どちらかのテーブルで`JoinTable`を指定する

# 多対１のリレーション記述方法

商品マスタ（Products）の商品区分を区分名称マスタ(classNames)にリレーションする

```js
// modules > Products.ts

import ClassNames from '@modules/ClassNames'

@Entity()
export class Products extends BaseEntity {

  // 商品ID
  @PrimaryGeneratedColumn()
  readonly id?: number;
  
  // 商品名
  @Column()
  name: string;
  
  // 商品区分
  @Column()
  classNamesId: string;

  // 区分名称マスタにリレーション
  @ManyToOne(() => ClassNames, classNames => classNames.name)
  classNames: ClassNames;

// ~省略~
```

商品区分を`classNamesId`という名前にしないとリレーションできなかった

`classNames`の`id`と紐付いている、これを他のカラムに変えたかったが、できない

おそらく主キーにリレーションされるようになっていて、`テーブル名 + 主キーカラム名`の形でないといけないのでは？（要検討）
