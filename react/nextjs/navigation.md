# Nextのルーティングの仕方

Next.jsでは、HTMLで作られた静的サイトのように、ディレクトリ構造でURLルーティングを行う

# Link

Linkコンポーネントは`<a>`タグをラップしたコンポーネントで、使い方は`<a>`タグと似ている

```js
import Link from 'next/link'

// ~~中略~~
<Link href="/">
  <a>Back to home</a>
</Link>

```

ただ、`<a>`タグとは違い、Linkコンポーネントを使うとクライアントサイドでのナビゲーションとなる

ページ遷移がJavaScriptを使って行われるのでブラウザのページ遷移よりも高速になる（ajax？）

Next.jsアプリ外のページへのリンクは`<a>`タグで行う

`className`などの属性は、Linkタグではなく`<a>`タグに加える

[[Linkコンポーネントのリファレンス]](https://nextjs.org/docs/api-reference/next/link)
