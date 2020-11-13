# ダウンロードjsはブラウザのダウンロード機能を実行させるコマンド

Blob形式に変換して使う

```js
import download from 'downloadjs'
const res = await fetch(...) // fetchData
const blob = await res.blob()
download(new Blob([blob]),'fileName.csv')
```

LarabelでCSVダウンロード機能を実装した際に使用した

LaravelのコントローラではDBからCSV形式に変換して、`streamDownload`で返している

直接中身を見たところ、データとして返ってきているだけで、自動でダウンロードは行われなかったため、こちらを使用した

