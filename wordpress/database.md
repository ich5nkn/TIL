# WordPressとDatabase

WordPressでは投稿データや固定ページのデータ、コメントやカテゴリ、ユーザ情報などをDBで管理している

テーブルの接頭辞は任意の文字列を設定する（基本はwp_)

各テーブルは共通テーブルとメタテーブルに分かれている　例:投稿は`wp_posts`と`wp_postmeta`

`wp_posts`にはタイトルや記事の内容、記事の種類（投稿か固定ページか）などが入っている

`wp_postmeta`は`post_id`で`wp_posts`と紐付いており、key,value形式でデータを格納している

サムネイル情報やカスタムフィールドの値、プラグインで使用する値などが入っている

メタデータは`get_post_meta`関数でphp内で取得・利用できる　[リファレンス](https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/get_post_meta) / 
[参考：カスタムフィールド取得](https://memocarilog.info/wordpress/theme-custom/3200)

データベース構造について詳しく見るなら[ここ](https://wpdocs.osdn.jp/%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E6%A7%8B%E9%80%A0#.E3.83.86.E3.83.BC.E3.83.96.E3.83.AB:_wp_commentmeta)

# wp_posts

## 主なカラム

### post_title , post-content

投稿のタイトルと内容が保持される

### post_status

投稿の状態（公開中、非公開など）が保持される　[詳細](https://wpdocs.osdn.jp/%E6%8A%95%E7%A8%BF%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9)

### post_type

投稿タイプ（固定ページ、投稿など）が保持される、カスタム投稿タイプもここで指定する [詳細](https://wpdocs.osdn.jp/%E6%8A%95%E7%A8%BF%E3%82%BF%E3%82%A4%E3%83%97#.E3.83.AA.E3.83.93.E3.82.B8.E3.83.A7.E3.83.B3_.28revision.29)

### menu_order

レコードの並び順をサポートする

# wp_postmeta

wp_postのIDとpost_idを紐付けてメタ情報を保持する

主にカスタムフィールドのデータを管理している

# wp_comments , wp_commentmeta

コメントのデータとそのメタデータを保持している

# wp_users , wp_usermeta

サイトに要録されているユーザ情報を保持している、パスワードは暗号化されている

# wp_terms , wp_termmeta , wp_term_taxonomy

カテゴリやタグなど分類分けに関する情報を保持している

# wp_options

Wordpress全体におけるオプション情報をkey-value形式で保持している

開発者も個別の設定をかんたんに保存・読み込みすることができる


