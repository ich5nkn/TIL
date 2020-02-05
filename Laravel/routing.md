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

