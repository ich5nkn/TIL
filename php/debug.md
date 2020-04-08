# 変数の値の確認方法

PHPはサーバサイドのプログラムのため、JSのようにConsole.logなどで確認することができない

[ver_dump](https://www.php.net/manual/ja/function.var-dump.php)関数を使う

`echo`でもできるが、配列などが表示できない

`print_r`で配列も表示できる、こちらは型情報などが無いため`var_dump`と使い分け

# 配列データの整形

`var_dump`で配列データをHTMLに表示させても非常に見づらい

`<pre>`タグで囲むとお手軽に整形できる

デベロッパーモードのElementsで確認するのも楽

[[参考サイト]](https://qiita.com/yamamoto_hiroya/items/6ad6d448afcff1cf3791)
