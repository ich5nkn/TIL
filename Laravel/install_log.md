# Laravel6系 + Reactの開発環境を作成する

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



