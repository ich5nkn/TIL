# bladeとは

LaravelのViewで使えるテンプレートエンジン

ファイルの拡張子は`.blade.php`

phpファイルをクラスのように階層化して使い回すことができる

フッターなどの決まりきっている部分を基底クラスにしてbodyだけのbladeを読み込むということができる

`@xxx`でbladeのコマンドを記述する

例
```php:hello.php
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

この辺よく使う
@foreach
@yield
@section
@append
