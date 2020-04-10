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
