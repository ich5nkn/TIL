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
  
- envファイル生成

  - `cp .env.example .env`
  - APPキーの生成（アプリごとに設定する暗号化などに使用される鍵）
  - `php artisan key:generate`
  
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
