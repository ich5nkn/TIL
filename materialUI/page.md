### 一覧画面から、詳細画面へ移動したのちに、戻るときエラー

詳細画面から一覧画面に戻るさいに、ページネーションやY座標を復元するようにという要望があった

Next.jsのRouterを使い、詳細画面にPropとして、`page, perPage, ypoint, url, path`を渡す

戻るボタンを押したときに、上記の情報をPropとして返す

その結果をStateにセットすることで再現できた

しかし、一覧画面のデータをfetchする前にsetStateしていたため、エラーが発生した

要は、データが何件あるか分からないのに２ページを開いてはいけないということだった

fetchした後にsetStateをするように処理を変更したことでエラーが消えた

[[ Issue ]](https://github.com/mui-org/material-ui/issues/15616)
