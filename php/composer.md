# Composerとは

PHPのパッケージ管理システム

npmのようなもの

Packagistというインターネット上のリポジトリからパッケージをインストールする

`composer install` でcomposer.jsonに書かれているパッケージを一括インストールできる

依存パッケージも一緒に自動でインストールできる

`composer install` をするとcomposer.lockが生成される

これはチーム内でバージョンを共有するためにバージョンをロックする

`composer update` をするとcomposer.lockに記されたバージョンを無視して最新を取得する
