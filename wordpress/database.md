# WordPressとDatabase

WordPressでは投稿データや固定ページのデータ、コメントやカテゴリ、ユーザ情報などをDBで管理している

テーブルの接頭辞は任意の文字列を設定する（基本はwp_)

各テーブルは共通テーブルとメタテーブルに分かれている　例:投稿は`wp_posts`と`wp_postmeta`

`wp_posts`にはタイトルや記事の内容、記事の種類（投稿か固定ページか）などが入っている

`wp_postmeta`は`post_id`で`wp_posts`と紐付いており、key,value形式でデータを格納している

サムネイル情報やカスタムフィールドの値、プラグインで使用する値などが入っている

メタデータは`get_post_meta`関数でphp内で取得・利用できる　[リファレンス](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/get_post_meta)
 [参考：カスタムフィールド取得](https://memocarilog.info/wordpress/theme-custom/3200)


