# data()メソッド

jQueryでは、`data-`から始まるHTML属性を`data()`メソッドで扱うことができる

これにより、HTML要素ごとのJSでのプログラミングを行いやすくできる

```html js
<div id="test" data-val="value" data-val2="value2" />

<script>
  console.log(jQuery('#test').data())
  // {val: "value, val2: "value2"}
  console.log(jQuery('#test').data('val'))
  // "value"
  
  // 第２引数を指定して、データをセットすることもできる
  jQuery('#test').data('val3','value3')
</script>
```
