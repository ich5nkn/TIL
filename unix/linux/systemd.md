# systemdとは

すべてのプロセスの元になるプロセス

従来のinitシステムに対し、高速でシンプルなため様々なディストリビューションで使われている

`pstree` コマンドを実行するとsystemdがすべてのプロセスの元になっていることが確認できる

# コマンド

- `systemctl status (demon)`

  起動中かどうかなどステータスを確認する
  
  確認したいデーモン名を指定することができる
  
- `systemctl start [demon]`

  デーモンを起動する
  
- `systemctl stop [demon]`

  デーモンを終了する

- `systemctl enable [demon]`

  デーモンの自動起動を有効にする
