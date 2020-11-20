## cronとは

プログラムを提示実行するためのサービス

基本的にUNIX系のOSではcronデーモンが動いている

## 使い方

`crontab -e`で`vi`が起動するので、そこに実行タイミングと実行するファイルを記述する

実行するプログラムの内容はシェルスクリプトで作成する

```
* * * * * [実行コマンド]
```

の形式で記述し、左から「分」「時」「日」「月」「曜日」を指定する

```sh
# 例：毎日AM00:00に実行
00 00 * * * [実行コマンド]

# 例：毎月5日、15日、25日のAM00:00:00に実行
00 00 5,15,25 * * [実行コマンド]

# 例：毎日８時〜１８時の０分に実行
00 8-18 * * * [実行コマンド]
```

設定し終わったらcronを再起動する

```
# sudo systemctl restart cron
```

