# iptablesとは

Linuxカーネルに組み込まれているファイアウォール

iptablesを置き換えるものとしてnftablesがリリースされているので基本はどちらかが使われている

# archLinux(manjaro) での設定

archLinuxでは初期状態でiptablesがインストールされている

`/etc/iptables/` に設定ファイルが格納されている

`iptables.rules` がIPｖ４ｓｗ`ip6tables.rules` がIPｖ６の設定ファイル（初期は空）

`iptables-restore < /etc/iptables/simple_firewall.rules` で設定済のルールを初期化できる

`simple_firewall.rules` の部分はディストリビューションで異なると思うが、多分ディレクトリに何らかの初期設定ファイルが入っている、
なければネットから初期設定を探してコピペする、

※今回はパーミッションの関係で書き込みに失敗したのでsudoで実行した

初期設定のままだとすべての接続を遮断してしまうので、SSHやHTTPアクセスの許可など必要な接続は除外するように記述する

- 例： `-A TCP -p tcp --dport 22 -j ACCEPT`

- 例： `-A TCP -p tcp --dport 80 -j ACCEPT`

SSH接続で設定するときは遮断されないように事前に `systemctl stop iptables` しておく

`iptables -nvL` で現在のFW設定が確認できる
