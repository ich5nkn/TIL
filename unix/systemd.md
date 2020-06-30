# error

`systemctl start serviceName`を実行したところ、以下のエラー

`serviceName :  Start request repeated too quickly.`

１０秒以内に６回起動を繰り返すとこのエラーになるらしい

一旦サービスをstopしてしばらく待った後に起動したら無事に起動できた
