# bladeとは

LaravelのViewで使えるテンプレートエンジン

phpファイルをクラスのように階層化して使い回すことができる

フッターなどの決まりきっている部分を基底クラスにしてbodyだけのbladeを読み込むということができる

ファイルの拡張子は`.blade.php` で基本的にすべて `resources/views` ディレクトリに設置する

# 書き方

`@xxx`でbladeのコマンドを記述する

例:base.blade.php
```php:base.blade.php
<html>
  <head>
    <title>@yield('title')</title>
  </head>
  <body>
    @section('body')
    base
    @show
  </body>
</html>
```
index.blade.php
```php
@extends('base')

@section('title')
title
@endsection

@section('body')
@parent
sub
@stop
```
生成されたHTMLファイル
```html
<html>
  <head>
    <title>title</title>
  </head>
  <body>
    base
    sub
  </body>
</html>
```

- `@yield` bladeの読み込み
- `@section` blade(クラスのようなもの)定義
- `@extends` 親ブレードの継承
- `@foreach` 繰り返し
- `@append` 上位ブレードの同じセクションを追記する（？）
- `@parent` 上位ブレードのセクションをそのまま読み込む