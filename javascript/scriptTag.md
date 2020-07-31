# <Script>

scriptタグを使うと、HTMLに直接JSを記述することができる

JSの実行はHTMLが読み込み終わった後なので、基本的に<body>部の最下部に記述する  
※ HTMLの読み込み途中にライブラリやJSの読み込みをしてしまい、読み込みが遅くなるため

# phpのデータの利用

PHPはサーバサイド言語のため、サーバサイドで一番初めに処理される

PHPのデータを使用したい場合は、echoでscript内に記述する

配列を渡したいときは注意が必要

```html
<script>
	var data = '<?php echo json_encode($data)?>'
	var json = JSON.parse(data)
	json.forEach(function(data){console.log(data.bukken_no)})
</script>
```

PHPが最初に処理され、生成されたHTMLのScriptタグ内にはPHPの配列が文字列で記述されている

対象のページを右クリックして、ページのソースを表示をすると、PHPで処理された後のHTMLが見れる

そこにJSとして正しい記述がなされていれば、動くはず

```html
ページのソースを表示した結果

<script>
	var data = '[{"hy_no":"108","bukken_no":"2000037563","yachin":"49500","kyoekihi":"2500","shikikin":"0\u5186","madori_suu":"1","madori_type":"50","senyu_men":"40.29","reikin":"1\u30f6\u6708"},{"hy_no":"107","bukken_no":"2000189542","yachin":"50500","kyoekihi":"2500","shikikin":"0\u5186","madori_suu":"1","madori_type":"50","senyu_men":"40.07","reikin":"1\u30f6\u6708"}]'
	var json = JSON.perse(data)
	console.log(json)
</script>
```
