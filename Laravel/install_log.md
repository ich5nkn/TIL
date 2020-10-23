# Laravel6系 + Reactの開発環境を作成する

```
MacOS , fish
```

## Laravelのインストール

まずはインストールするバージョンを決める

`Laravel version`と検索してバージョンの情報をみる

[[ wikipedia / laravel ]](https://ja.wikipedia.org/wiki/Laravel)

今回はLTS最新のLaravel6系を使用する

必要PHPバージョンは7.2〜

```
$ php --version
PHP 7.4.10 (cli) (built: Sep  3 2020 18:21:42) ( NTS )
```

既にPHP7.4がインストールされていたので、PHPのインストールは特に行わない

```
$ composer create-project "laravel/laravel=6.*" myProjectName
```

composerのバージョンが古いのでアップデートしろと言われたのでついでに行った

６系の最新バージョンでLaravelをインストール

ディレクトリ内に移動し、バージョン確認、起動テスト

```
$ php artisan -V
Laravel Framework 6.18.43

$ php artisan serve
```

Laravelのスタートページが起動しているのを確認

## viewをReactに変更

調査したところ、Laravel6でReactを使うには`laravel/ui`を使う模様

```
composer require laravel/ui --dev
```

すると、エラー発生

```
Installation failed, reverting ./composer.json to its original content.
```

調べたところ、バージョンの競合などでインストールできませんでしたとのこと [[ 参考 ]](https://qiita.com/engineerYodaka/items/46cf6419825732c14528)

最新バージョン（3.*系）だとインストールできないみたいなので、バージョン指定で少しずつ下げていく

```
$ composer require "laravel/ui:2.*"
 ~ ~ ~
Installation failed, reverting ./composer.json to its original content.
$ composer require "laravel/ui:1.*"
```

1.*系だとインストールできたが、警告発生

```
Package jakub-onderka/php-console-color is abandoned, you should avoid using it. Use php-parallel-lint/php-console-color instead.
Package jakub-onderka/php-console-highlighter is abandoned, you should avoid using it. Use php-parallel-lint/php-console-highlighter instead.
Package phpunit/php-token-stream is abandoned, you should avoid using it. No replacement was suggested.
↓Google翻訳
パッケージjakub-onderka / php-console-colorは破棄されているため、使用しないでください。 代わりにphp-parallel-lint / php-console-colorを使用してください。
パッケージjakub-onderka / php-console-highlighterは破棄されているため、使用しないでください。 代わりにphp-parallel-lint / php-console-highlighterを使用してください。
パッケージphpunit / php-token-streamは破棄されているため、使用しないでください。 代替品は提案されていません。
```

バージョンを上げれば解決できそうだが、上げたら上げたで問題が起きそうなので、一旦このままにしておく [[ 参考 ]](https://www.life-trace.net/entry/2019/12/04/085724)

```
$ php artisan ui react
```

早速インストールしたlaravel/uiを使用し、viewをreactに切り替える

実際にはpackage.jsonとexampleのファイルが生成されているっぽい？

```
$ yarn
$ yarn hot
```

モジュールのインストールと、ビルドできるかをテスト

テストが通ったらjsで作られたコンポーネントを表示してみる

`resources/js/components`に`Example.js`がある

ファイルの中を見ると、IDが`example`の要素にコンポーネントを描画する処理のよう

```js
// Example.js
import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

```

`resources/views/welcome.blade.php`の`<body>`の閉じタグの前に下記のコードを追加

```php
<div id="example"></div>
<script src="{{mix('js/app.js')}}"></script>
```

この状態で、`artisan serve`だけを動かすと、Laravelの初期ページが表示される

さらに`yarn hot`を動かすと、上記のコンポーネントも描画される

`yarn prod`を実行すると、`yarn hot`しなくても描画される

これは、node.jsの`yarn dev`,`yarn build`(&`yarn start`)と似ている

## TypeSctiptを導入

```
$ yarn add -D typescript ts-loader @types/node @types/react @types/react-dom
```

`yarn add`に`-D`オプションをつけると、開発時のみに使用できる

```
$ ./node_modules/.bin/tsc --init
```

ルートディレクトリに`tsconfig.json`が生成される

`tsconfig.json`を開くと、各設定とコメントが書いてある

jsxの行だけ、`"jsx":"react"`に書き換える

次に`webpack.mix.js`を書き換える

```js
// mix.react('resources/js/app.js', 'public/js')
mix.ts('resources/ts/index.tsx', 'public/js')
```

`mix.react`を`mix.ts`に書き換え、第一引数のパスを変える（対象ファイルのパス？）

`welcome.blade.php`の`<script src="{{mix('js/app.js')}}"></script>`を  
`<script src="{{mix('js/index.js')}}"></script>`に書き換える（出力先のファイル名が変わったため）

また、中身も、一旦全部消してbodyに`app`というidのdiv要素を配置しておく

`resource/ts/index.tsx`を下記のように作成し、`yarn hot`で動かすと、無事ホットデプロイできていることがわかった

```jsx
// index.tsx
import React from 'react'
import ReactDOM from 'react-dom';

const APP: React.FC = () => {
    return (
        <>SinglePageApplication</>
    )
}

export default APP

if (document.getElementById('app')) {
    ReactDOM.render(<APP />, document.getElementById('app'));
}

```

## react-routerの導入

まずはパッケージのインストール

```
$ yarn add react-router-dom
```

`ts/components/ui/Navbar.tsx`を作る

```jsx
// Navbar.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <div>
            <Link to='/'>HOME</Link>
            <Link to='test'>TEST</Link>
        </div>
    )
}

export default Navbar;
```

@typesをインストールするの忘れてエラーが出ていたので追加

```
$ yarn add @types/react-router-dom
```

`index.tsx`を修正

```jsx
// index.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/ui/Navbar'
import Home from './pages/Home'
import Test from './pages/Test'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const APP: React.FC = () => {
    return (
        <>
            <Router>
                <div>
                    <Navbar /><br />
                    <Route exact path='/' component={Home} />
                    <Route path='/test' component={Test} />
                </div>
            </Router>
        </>
    )
}

export default APP

if (document.getElementById('app')) {
    ReactDOM.render(<APP />, document.getElementById('app'));
}

```

HomeとTestについては簡単なものを作成

ページ遷移の実装が確認できた

## jwt-authの導入

laravelにjwtでのログイン認証を追加する

```
$ composer require tymon/jwt-auth:1.0.0-rc.5
```

アウトオブメモリーエラーが出たが、既に入っていたから？

`composer.json`の中を確認したら入っていたのでcomposer再実行

```
$ composer update 
```

今度は上手く行ったぽい

次に、シークレットの作成

```
$ php artisan jwt:secret
```

成功、`.env`ファイルの最終行に`JWT_SECRET`が追加されていることを確認

次に、設定ファイル作成

```
$ php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
```

`config/jwt.php`が生成されていることを確認

`App/User.php`を修正

```php
~ ~ ~
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
~ ~ ~
 public function getJWTIdentifier()
    {
        return $this->getKey();
    }

 public function getJWTCustomClaims()
    {
        return [];
    }
```

`config/auth.php`を修正

```php
'defaults' => [
    'guard' => 'api',
    'passwords' => 'users',
],

...

'guards' => [
    'api' => [
        'driver' => 'jwt',
        'provider' => 'users',
    ],
],

```

`guard`を`api`に変更し、`api`の`driver`に`jwt`を設定する

これでjwt-authを使う準備は整った（らしい）

テストのために、jwt-authのコントローラを作成する

```
$ php artisan make:controller AuthController
```

`App/Http/Controller/AuthController.php`が生成されるので中身を記述

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
```

次に`routes/api.php`でrouting登録

```php
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});
```

ちゃんと`jwt-auth`が動くかを調べる

```
$ php artisan make:seeder UsersTableSeeder
```

`database/seeds/UserTableSeeder`を編集

```php
<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'test',
            'email' => 'test@test.com',
            'password' => bcrypt('testtest'),
        ]);
    }
}
```

`database/seeds/DatabaseSeeder`を開き、`UsersTableSeeder`のコメントアウトを外す

```
$ php artisan db:seed
```

エラー発生

DBを立てていなかったことを思い出し、DockerでMySQLを起動する

起動確認後、実行したがやはりエラー

```
 Illuminate\Database\QueryException  : SQLSTATE[HY000] [2002] Connection refused (SQL: insert into `users` (`name`, `email`, `password`) values (test, test@test.com, $2y$10$KQ./P5PNFUNN/j8SEfi7RehQ4Q7Ebg/1KynJeSMRycvoIYb6E3j9.))

  at /Users/koga/projects/model-admin/vendor/laravel/framework/src/Illuminate/Database/Connection.php:669
    665|         // If an exception occurs when attempting to run a query, we'll format the error
    666|         // message to include the bindings with SQL, which will make this exception a
    667|         // lot more helpful to the developer instead of just the database's errors.
    668|         catch (Exception $e) {
  > 669|             throw new QueryException(
    670|                 $query, $this->prepareBindings($bindings), $e
    671|             );
    672|         }
    673|

  Exception trace:
```

どうやらMySQLの接続が上手く行っていない模様

ローカルのMySQLにSequelProからの接続もできなかったため、MySQL側の問題

ローカルのMySQLではなく、AWSにつないだら上手く行ったので良しとする

```
$ php artisan migrate
$ php artisan db:seed
```

