# LaravelのViewをVueからReactに変更する

`php artisan preset react`で切り替わる

### Laravelのバージョン７以降はpresetできない

```
// Laravel7.x以降
$ composer require laravel/ui
$ php artisan ui react

// Package.jsonにReact関連の依存関係が追加されているのでインストールする
$ npm install

// コンパイルできるか確認
$ npm run dev
```

なんかいっぱい変更と追加された

![2020-04-10 16 15 57](https://user-images.githubusercontent.com/56820273/78971729-2876f300-7b47-11ea-9326-14abd8d3315a.png)

### exampleを表示してみる

`resources/js/components/Example.js`にテスト用のコンポーネントが生成される

`resources/js/app.js`で`require`してある、追加するときはここに`require`を足せば良さそう

新しくテスト用のViewを作成(`resources/views/example.blade.php`)

```
<h1>Reactサンプル</h1>
<div id="example"></div>
<script src="{{mix('js/app.js')}}" ></script>
```

divにidを指定すると代わりに対応するコンポーネントが表示されるみたい

`script`タグは無いと動かなかった

これでJSXを使ってコンポーネント設計ができそう
