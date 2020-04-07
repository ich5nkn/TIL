# Laravelのルーティングの仕組み

`/routes/web.php` にルーティングの仕様が書いてある

Laravel new でプロジェクトを新規作成した場合、下記のようにWelcomeへルーティングしてある

```php
Route::get('/', function(){
    return view('welcome');
});
```

これは`/`にアクセスした際に`/resources/views/welcome.blade.php`を表示する意味

ファイル指定の際にviewsディレクトリまでのパスとblade以降の拡張子は省略できる

# 凡例

実際のプロジェクトでは上記の第2引数に関数を直接指定する書き方はあまりされない

`Route::get('url','ControllerName@methodName')`という書き方が一般的

コントローラの関数を使用する

関数に引数を渡したいときは`Route::get('url/{arg}',controller@method)`のように中括弧で囲んで渡す

コントローラ側の受け取り方`public function hoge($arg){ ... }`

~~ おまじないで第2引数に`Request`を指定する？ ~~ `public function hoge($arg ,Request $request){ ... }`

`Request $request`はおまじないではなく、クエリ文字列を受け取るという設定

`url/hoge?key=value`のようなURLでリクエストを送ると、`$request->key`で`value`が取得できる
