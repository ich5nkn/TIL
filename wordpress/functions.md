# WP_Query

サブループを生成する際に使う

引数には連想配列でオプションを指定して渡す

[リファレンス](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/WP_Query)
 / [参考](https://wemo.tech/160)

# get_template_part($slug)

自作のテンプレートパーツを呼び出すときに使用する

`header.php`や`sidebar.php`は`get_header()`などで呼び出せるが

同じサイトの複数のテンプレートで同じパーツを使い回す場合

パーツを外部ファイル化して`get_template_part(ファイル名)`を使って呼び出す

`sample.php`の読み込みなら`get_template_part(sample)`、拡張子はつけない

例：[メルカリのプロダクト（Topページと同じパーツを使用）](https://about.mercari.com/products/)

# wp_enqueue_style() / wp_enqueue_script()

スタイルシートやJSファイルをキューに追加する関数

例：`wp_enqueue_style([キュー内の名前],[CSSのパス],[array(事前に読み込むCSS)],[version])`

`wp_dequeue_style()`で取り除く事ができる

古いテーマで今はもう動作しないJSファイルなどを使っている場合に取り除く

キューに追加した後はHTMLの`<head>`内に書かれた`wp_head()`で読み込む

# the_post()

投稿のカウントを＋１する関数？

主にWhileループとセットで使用される

```php
<?php
if ( have_posts() ) :
	while ( have_posts() ) : the_post();
		// ループ内のコード
	endwhile;
else :
	echo wpautop( '投稿が見つかりませんでした。 );
endif;
?>

```

`the_post()`がないと永遠にループしてしまう

# get_field() , the_field()

カスタムフィールドの内容を取得する関数

`get_field`で取得して`the_field`で書き出す

```php
// カスタムフィールドの設定があるときのみ内容を表示するときの例
<?php if(get_field('text_field')): ?>
<?php the_field('text_field'); ?>
<?php endif; ?>
```
