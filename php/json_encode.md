# PHPでJSONを作る

連想配列やオブジェクトをJSONに変換する

`json_encode()`を使用する

上手く行けば良いのだが、失敗すると`FALSE`が返ってくる

原因を調べるには`json_last_error_msg()`などを使う [[参考（Qiita）]](https://qiita.com/ma_me/items/dd7e5d7dc7d57cd7bebc)

UTF-8のデータでないと変換できないため、UTF-8以外の文字コードの場合は変換が必要

`mb_convert_encoding()`などを使って変換する [[リファレンス]](https://www.php.net/manual/ja/function.mb-convert-encoding.php)

今回はMySQLのGEOMETRY型を使っていて変換ができなかったため、`array_column()`で不必要なデータは省いた
