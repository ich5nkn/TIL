POSTはHTTPメソッドのひとつ

クライアントからサーバ側に色々な情報を送ることができる

ページ遷移を行う、`form submit`でのPOSTと

ページ遷移を行わないAjaxなPOSTがある

### ページ遷移を行う場合

`<form>`を使い、`<input>`項目に値を入力させる

もしくは、jsやjqueryを使い、`<input type="hidden">`に裏側で値をセットする

jsからは`document.formId.submit()`でPOSTでページ遷移させることができる

```html
<!--- これは画面上に表示されない --->
<form method="post" name="form4" id="form4" action="/search/">
  <input type="hidden" name="sort_kind" value="2">
  <input type="hidden" name="bukkennKbn" value="1">
</form>

<div class="ranking--linkbtn" data-type="chintai" style="cursor:pointer">
  <a>もっとみる</a>
</div>

<script>
$('.ranking--linkbtn').on('click',function(){
    var type = $(this).data('type');
    document.form4.bukkennKbn.value = type == 'baibai' ? '2' : '1';
    var city = $('[name='+type+'Ranking] option:selected').text();
    if(city!=='全地域'){
        $('#form4').append('<input type="hidden" name="selectArea[]" value="'+city+'" />');
    }
    document.form4.submit();
});
</script>
```

### ページ遷移を行わない場合

```js
<script>
$('.ranking--linkbtn').on('click',function(){
    var type = $(this).data('type');
    document.form2.selectChikunen.value=2; = type == 'baibai' ? '2' : '1';
    var city = $('[name='+type+'Ranking] option:selected').text();
    var query = "sort_kind=2&bukkenKbn="+bukkenKbn+"&selectArea="+city;

    // リクエストを生成
    var req = new XMLHttpRequest();
    // リクエストのオプションをセット
    req.open('POST','/search/',true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // クエリを含めて送信
    req.send(query);
});
</script>
```
