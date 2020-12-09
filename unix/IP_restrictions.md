### IP制限をかける方法

IP制限をかける方法はたくさんあるが、centOS環境では一般的に`firewall-cmd`を使用する

許可するIP（`trusted`）を追加する方法は下記

```
firewall-cmd --zone=trusted --permanent --add-source=[グローバルIPアドレス]
firewall-cmd --reload
```

`--permanent` で永続化をしている
