### checkboxをラジオボタン化する方法

```html
<form>
  <input type="checkbox" id="check1" class="radio-check" checked="checked">
  <label>check1</label>
  <input type="checkbox" id="check2" class="radio-check">
  <label>check2</label>
  <input type="checkbox" id="check3" class="radio-check">
  <label>check3</label>
</form>

<script>
  // チェックボックスを単一選択にする
	$('.radio-check').click(function(){
		$('.radio-check').not(this).prop('checked',false);
	})
</script>
```
