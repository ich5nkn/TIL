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

よく使うディレクティブ（構文）

- `@extends` 親ブレードの継承

- `@section('key')` セクション(クラスや変数のようなもの)定義

- `@yield('key')` セクションの読み込み、表示

- `@component('filepath')` コンポーネントの読み込み

  `@component`の中身は`{{$slot}}`に格納される
  
- `@slot('key')` component呼び出しの際に`{{$slot}}`以外を渡したいときはkey(名前)をつけて定義する

  その場合つけた名前の変数に格納される
  
- `@if`,`@foreach` 分岐、繰り返し　bladeなら`<?php~?>`で囲まなくても良いため記述が楽

- `@append` 上位ブレードの同じセクションを追記する（？）

- `@parent` 上位ブレードのセクションをそのまま読み込む
