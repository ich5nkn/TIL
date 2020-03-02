# カテゴリ内検索の実装

Wordpressで記事の数が増えるとページ内検索したい場面も出てくる

単純に検索するとクエリは`S=[検索ワード]`となるが、これだと前記事からの検索になる

`S=[検索ワード]&cat=[カテゴリID]`の形にするとカテゴリ内検索ができるのでは

[参考](https://blog.megefeps.info/20150904/wordpress%E7%89%B9%E5%AE%9A%E3%81%AE%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA%E3%83%BC%E5%86%85%E3%81%A7%E3%82%B5%E3%82%A4%E3%83%88%E5%86%85%E6%A4%9C%E7%B4%A2%E3%81%A7%E3%81%8D%E3%82%8B%E3%83%95%E3%82%A9/)

# HTML/CSSをWordpress化する際にCSSが読み込まれない

`wp_head();`と`wp_footer();`がなかった

`header.php`や`footer.php`を指定していなくてもこれらは必要らしい

ちなみにtheme内においた画像が読み込まれない件は絶対パス指定にすることで表示できる

絶対パス指定は大変なので`<?php bloginfo('stylesheet_directory'); ?>`を使うと良い
