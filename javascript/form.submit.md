`form.submit()`でフォームの`<input type='submit'>`をクリックしたのと同じ動きができる

複雑なバリデーションなどを行う際に、送信ボタン押下でJSのバリデーションを実行した後に送信という動きができる

また、HTML5でも`required`属性や`pattern`属性で簡単にバリデーションができる

しかし、`form.submit()`を使用すると、HTMLのバリデーションは飛ばしてPOSTしてしまう

その対策で、`checkValidity()`メソッドと、`reportValidity()`メソッドを使用する

例

```
function validate(){
    if(document.getElementById("relationshipHeadSelect").value == 'その他' && document.getElementById("relationshipHeadInput").value == ''){
        alert('その他の続柄を入力してください')
    }else if(document.getElementById('pinNumberCheck').value != document.getElementById('pinNumber').value){
        alert('暗証番号が一致しません')
    }else if(document.getElementById('isHavePhone2').checked && (document.getElementById('phone1').value == '' || document.getElementById('phone2').value == '' || document.getElementById('phone3').value == '')){
        alert('電話番号を入力してください')
    }else{
        if(document.forms[0].checkValidity()){
            document.forms[0].submit()
        }else{
            document.forms[0].reportValidity()
        }
    }
}
```
