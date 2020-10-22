# Laravel6系 + Reactの開発環境を作成する

## Laravelのインストール

まずはインストールするバージョンを決める

`Laravel version`と検索してバージョンの情報をみる

[[ wikipedia / laravel ]](https://ja.wikipedia.org/wiki/Laravel)

今回はLTS最新のLaravel6系を使用する

必要PHPバージョンは7.2〜

```fish
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

```
// mix.react('resources/js/app.js', 'public/js')
mix.ts('resources/ts/index.tsx', 'public/js')
```

`mix.react`を`mix.ts`に書き換え、第一引数のパスを変える（対象ファイルのパス？）

`welcome.blade.php`の`<script src="{{mix('js/app.js')}}"></script>`を  
`<script src="{{mix('js/index.js')}}"></script>`に書き換える（出力先のファイル名が変わったため）

また、中身も、一旦全部消してbodyに`app`というidのdiv要素を配置しておく

`resource/ts/index.tsx`を下記のように作成し、`yarn hot`で動かすと、無事ホットデプロイできていることがわかった

```
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

```
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

```
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
