# 子テーマとは

WPの公開されてるテーマは機能追加のアップデートがされることがある

その際にカスタマイズを行ったテーマに上書きされてしまう

そのため、別にテーマを作成し修正をすることでアップデートを安全に行う

修正したい箇所のPHPファイルの要素をマークアップして追加CSSで記述という流れが基本

# ファイルの読み込まれる順番

まず親テーマが読み込まれ、次に子テーマが読み込まれる

子テーマに同名のphpファイルがあった場合はファイルが置き換えられる

`style.css`については置き換えではなく追加で読み込まれる

`functions.php`については例外

そのため、親テーマの`front-page.php`などを改造したいときは、子テーマにコピーしてから修正する

# 子テーマの作り方

### 子テーマディレクトリの作成

子テーマの名前をつけたディレクトリを作成する

### functions.phpの作成

以下をそのまま貼り付け

```php
<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
```

### style.cssの作成

```
/*
Theme Name:[さっき作ったディレクトリ名]
Template:[親テーマのディレクトリ名]
Version:[親テーマと同じversion]
*/
```

### その他ファイルのコピー

修正したいファイルをコピーして持ってくる

`screenshot.png`などサムネイル画像を置くのも良い（３：４の画像、600x450など）
