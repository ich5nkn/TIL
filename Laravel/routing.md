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

# POST

入力フォームなどでViewで入力したデータをコントローラに渡す際はPOSTメソッドを使う

POSTメソッドを使えば様々なデータを渡すことが出来る

# public

`/public`下に置いたファイルには、ルートパス＋ファイル名を直接指定することでアクセスできる

テストPGや生PHPでLaravelの機能を使わないAPIを作成する際に使用する

拡張子も含めてのファイル名指定なので注意

# api

`/routes/api.php`にはAPIのルーティングを記述する

このファイル内のルーティングパスには`/api`がプレフィックスされる

例： `Route::post('login', 'AuthController@login');`には`/api/login`でアクセスできる

フロント側とAPIを簡単に分別することができ、便利

`RouteServiceProvider`を修正すればこの設定を変えることが出来るらしい。


