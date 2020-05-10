# 静的ファイル（画像）の取り扱い

Nextではトップレベルの`public`ディレクトリ内に配置する

`<img src="/image.png">` のようにpublic内のファイルはアプリケーションの`root`から参照することができる

# HTMLのheadタグへの干渉

ページのタイトルやCSSの読み込みなど、HTMLの`<head>`タグ内に記述したい内容がある場合、Next.jsでは`Head`コンポーネントを使用する

```js
// Headのimport
import Head from 'next/head';

export default function Example(){
  return(
    <div>
      <Head>
        <title>Example Page</title>
      </Head>
    </div>
  )
}
```

# CSSの読み込み

CSSは`xxx.module.css`という拡張子で保存する

CSSを読み込みたいコンポーネントでインポートして使うことが出来る

例：`layout.module.css`を以下のように作った場合

```css
.container {
  max-width: 36rem;
  padding:0 1rem;
  margin: 3rem auto 6rem;
}
```

同ディレクトリ内のlayout.jsで読み込む

```js
import style from './layout.module.css';

export default function Layout({children}){
  return <div className={style.container}>{children}</div>
}
```

上記のように、`style`という名前でインポートした場合、`className`を`style.container`にすることで`container`のスタイルを適用できる

ちなみに、`Layout`は`children`をラップするだけのコンポーネントなので、子のコンポーネントからインポートして使う
