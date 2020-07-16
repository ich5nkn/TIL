# CSS in JS　とは

ReactにJSを経由してCSSを実装していくアプローチのこと

Reactには標準でCSSのサポート機能が無いため、このような手法がある

# Styled-jsx ( Next.js )

Next.jsにはStyled-jsxというCSS-in-JSの機能が含まれている

`<style jsx>`というタグの中にCSSのようにスタイルを書き込んでいく

対象のコンポーネントにはCSSに対応した`className`をつける

JSXファイルに直接CSSを記入することで、コンポーネント単位にスコープすることができる

また、Stateなどの動的なデータを記入したい際も簡単に記述することができる

[[参考]](https://inside.dmm.com/entry/2018/05/14/react-styled-jsx)

# useStyle ( Material-UI )

Material-UIのCSS-in-JS機能

React Hooｋsを使っている？
