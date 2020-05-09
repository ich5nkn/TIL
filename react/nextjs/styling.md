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
