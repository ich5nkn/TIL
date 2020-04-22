# HOCとは

`Higher-order-components`の略で日本語で高次コンポーネントと訳される。

[[公式サイト]](https://reactjs.org/docs/higher-order-components.html)

コンポーネントをラップして機能を足す？

コンポーネントを引数に取り、`componentDidmount`などで処理を行い、

その結果をpropに足して返すことで処理を抽象化して使いまわすことができる

OSSなどで使われていることが多い

# Hooksとの兼ね合い

HOCはコンポーネントをラップすることで機能を追加するのでネストが深くなりやすい

ReactHooksが登場してから、そちらを使うほうが主流？

ただ、以前作られたOSSなどではHOCで書かれていることもあるため、理解する必要はある
