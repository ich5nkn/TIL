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
