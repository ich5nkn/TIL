# journalctlとは

システムのログを見る機能

コンソール上に表示されるメッセージを遡って見ることができる

systemdが使われてるLinuxのログ追跡は基本的にjournalctlでやる

Node.jsならconsole.log()とかエラー警告はjournalctlで確認できる

## 設定ファイル

`/etc/systemd/journald.conf`に設定ファイルがある

journalのサイズ制限などがされている場合があるため、確認しておく [[ 詳しくはここ ]](https://wiki.archlinux.jp/index.php/Systemd/%E3%82%B8%E3%83%A3%E3%83%BC%E3%83%8A%E3%83%AB#journal_%E3%81%AE%E3%82%B5%E3%82%A4%E3%82%BA%E5%88%B6%E9%99%90)

# コマンド

```
# journalctl
```

rootユーザで実行する、ジャーナルは`jkキー`で移動する

### サービス名を指定して確認

```
# journalctl -u [service name]
```

### 期間を指定して確認

```
# journalctl -u [service name] --since="2020-01-01 00:00:00" --until="2020-01-31 00:00:00"
```

### 今日のログを確認

```
# journalctl --since today
```

### 最新のログを確認（降順）

```
# journalctl -f
```

その他コマンドや使いかた [[ 参考 ]](https://qiita.com/hana_shin/items/96095571b7bf1b721255)


