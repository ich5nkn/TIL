# rechartsとは

reactでグラフを描画するライブラリ

[[公式サイト]](https://recharts.org/en-US/api)

棒グラフ・線グラフ以外にも色々なグラフがアニメーション付きで表現できる

X軸・Y軸・ラベルなどそれぞれのパーツに対して細かくPropを指定することができる

# エラー

`Error: <rect> attribute width: A negative value is not valid.`

rechartsのグラフの幅がマイナスになったときに発生するエラーらしい

幅が足りないと発生するため、幅を調整する（今回はレスポンシブコンテナでラップして画面を小さくした際に発生した）

[[issue]](https://github.com/recharts/recharts/issues/1462)
