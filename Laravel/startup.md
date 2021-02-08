# Laravelの始め方

- Composerのインストール(yarnのようなもの)
  - `brew install composer`

- PHPのインストール
  - `brew install php@7.4` @以降省略で最新バージョンインストール
  - `php -v` バージョン確認
  - phpenvでバージョン管理できる（Dockerでやってしまうなら不要）
  - パスを通す必要があるかも

- Laravelのインストール
  - `composer global require "laravel/installer"`
  - fishでパスを通す
  - `set -U fish_user_paths $HOME/.composer/vendor/bin $fish_user_paths`
  
- プロジェクト作成
  - `laravel new {プロジェクト名}`
  - ### (追記)このやり方だと最新バージョンのLaravelしか作成できない
  - バージョンを指定するときはcomposerを使う、以下は６系のプロジェクトを作成する例
  - `composer create-project "laravel/laravel=6.*" projectName`
  
- 権限の設定
  - `sudo chmod -R 777 storage`
  - `sudo chmod -R 777 bootstrap/cache`
  
- envファイル生成
  - `cp .env.example .env`
  - APPキーの生成（アプリごとに設定する暗号化などに使用される鍵）
  - `php artisan key:generate`
  - `APP_NAME`に日本語のアプリ名を入力するとおかしくなる
  - DBを使う場合はDBの接続情報も記述する
  
- locale設定
  - `config/app.php`を開く
  - `'timezone' => 'UTC',`を`'timezone' => 'Asia/Tokyo',`に変更
  - `'locale' => 'en',`を`'locale' => 'ja',`に変更
  
- ローカル起動
  - `php artisan serve`
  - `127.0.0.1:8000`にローカル実証サーバが立つ
  - `hello world`したければroutingを変更する

- すでにプロジェクトがある場合
  - GitなどでClone
  - ディレクトリ内で`composer update`
  - 起動はDockerで行う or ローカル起動
 
- laravelバージョン確認
  - laravelディレクトリ内で`php artisan -V`
