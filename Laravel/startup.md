# Laravelの始め方

- Composerのインストール

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
  
  
