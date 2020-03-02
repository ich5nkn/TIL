# WP_Query

サブループを生成する際に使う

引数には連想配列でオプションを指定して渡す

[リファレンス](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/WP_Query)
 / [参考](https://wemo.tech/160)

# get_template_part($slug)

自作のテンプレートパーツを呼び出すときに使用する

`header.php`や`sidebar.php`は`get_header()`などで呼び出せるが

同じサイトの複数のテンプレートで同じパーツを使い回す場合

パーツを外部ファイル化して`get_template_part`を使って呼び出す

例：[メルカリのプロダクト（Topページと同じパーツを使用）](https://about.mercari.com/products/)
