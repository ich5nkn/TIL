# コントローラとは

ルーティングされた後の処理を行う？

### ※ 理解不十分

# 作り方

`app/Http/Controllers`内に配置する

`$ php artisan make:controller HogeController`で自動作成できる

コントローラ名は先頭大文字のキャメルケースで記述するのがお作法

クラスまで自動作成されるので行いたい処理内容のメソッドを追加していく

# Viewへの変数の受け渡し方法

`Compact`と`with`のふたつの渡し方がある

違いは調べてみたがよく分からなかったので`Compact`を基本的に使おうと思う

```
// コントローラ
public function hoge(){
  $value = "HOGEHOGE";
  return view('sample.index',compact('value'));
}

// ビュー
<html>
  <body>
    <h1>受け取った値{{$value}}</h1>
  </body>
</html>

```
