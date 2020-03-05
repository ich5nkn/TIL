# file_get_contents

ファイルの内容を取得する関数

例：`file_get_contents('http://www.google.com')`

googleのHTMLが取得できる

# ストリームコンテキストの活用

ストリームコンテキストを用いることでリクエストにHEAD情報を付与したりできる

`stream_context_create()` で作成したオプションをを第三引数に指定する

[ストリームとは](https://qiita.com/tkek321/items/f1acd84569aca353ed9e)

[参考サイト](https://beyondjapan.com/blog/2016/06/file_get_contents_access_to_api_easily_on_php/)

[HTTPコンテキストの指定方法](https://www.php.net/manual/ja/context.http.php)

```php
// KintoneAPIで画像を表示させるサンプル
  function viewFile($fileKey){

        $subDomain='kttnet';
        $url = 'https://'.$subDomain.'.cybozu.com/k/v1/file.json?fileKey='.$fileKey;
        $headers = [
            'X-Cybozu-API-Token:IRC3Xb4eAFAbaFGbyIcBmL6oWr2vBjWyl1sS2mHM'
        ];
        $options = [
            'http' => [
                'method' => 'GET',
                'timeout' => 3,
                'header' => $headers
            ]
        ];

        // APIリクエストでファイルデータを取得
        $result = file_get_contents($url,false,stream_context_create($options));

        // HTTP_RESPONSE_HEADERからContent-Typeを検索して取り出す
        $search = preg_grep('!Content-Type:.*!',$http_response_header);

        // preg_grepの戻り値は配列のため、最初の１つだけを取り出す
        $ContentType = array_shift($search);

        // Content-TypeをHeaderに付与
        header($ContentType);

        // ファイルデータを表示
        echo $result;

    }
```
