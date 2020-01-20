# iptablesとは

Linuxカーネルに組み込まれているファイアウォール

iptablesを置き換えるものとしてnftablesがリリースされているので基本はどちらかが使われている

# archLinux(manjaro) での設定

archLinuxでは初期状態でiptablesがインストールされている

`/etc/iptables/` に設定ファイルが格納されている

`iptables.rules` がIPｖ４ｓｗ`ip6tables.rules` がIPｖ６の設定ファイル（初期は空）

ネットで探してシンプルなルールを設定するか、simple_firewall.rulesをコピーして設定する

そのままだとすべての接続を遮断してしまうので、SSHやHTTPアクセスの許可など必要な接続は除外するように記述する

- 例： `-A TCP -p tcp --dport 22 -j ACCEPT`

- 例： `-A TCP -p tcp --dport 80 -j ACCEPT`

SSH接続で設定するときは遮断されないように `systemctl stop iptables` しておく
