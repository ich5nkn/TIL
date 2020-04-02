# memo

## laravel(blade)でのディレクトリ構成

`resource/views`：ページの表示する中身

`resource/routes`：ルーティング（URLに名前を付けている）

```
Route::prefix('stocks')->group(function() {
  Route::get('stock', 'Stocks\StockController@index')->name('system_stock');
  〜〜〜
});
```

この場合`route('system_stock')`と記述することで、`stocks/stock`にアクセスできる

その際に第2引数の`'Stocks/StockController'`内の`index`メソッドが実行される

