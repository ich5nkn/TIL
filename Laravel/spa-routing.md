# LaravelでSPAを作る場合のルーティング設定

SPAのルーティングには`react-router-dom`を使用している

`react-router-dom`の`Link to`で移動した場合は、正常にページが表示されるが

ページのリロードを行ったり、URLを直で入力した場合（ブラウザからのリクエスト）は

`404 Not Found`になってしまう

この原因は、Laravelの`web.php`のルーティングの記載にある

```php
Route::get('/', function () {
   return view('welcome');
});
```

この書き方だと、ルートにアクセスした場合は、ルートページが返るが、それ以外はルーティングされない

全てのアクセスを、Reactのルートページに集約し、そこから`react-router-dom`にパスを渡す必要がある

```php
Route::get('/{path?}', function(){
    return view('welcome');
})->where('path','.*');
```

このように記載したところ、URL直接入力でも正しいページが表示されるようになった

ただ、この場合は、存在しないページのURLを入力しても、Reactのルートが表示されるため、404を自前で実装する必要がある



