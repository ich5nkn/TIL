# clickについて

click関数を使用すると、対象のDOMをクリックしたときの動きを制御できる

```js
$("#main-title").click(function(){
  console.log('clicked');
})
```

# 特定の要素を除外する

```html
<li class="list-item">
  <h4>title</h4>
  <p>text</p>
  <div class="delete-btn">
    <image src="../image/delete-btn.png">
  </div>
</li>
```

このようなHTML要素があり、  
`list-item`をクリックしたら詳細画面に遷移させたいが  
`delete-btn`をクリックした場合、画面遷移はせずに`li`要素を削除（非表示）したいときがある

```js
$('list-item').click(function(e){
  if(!$(e.target).closest(".delete-btn").length){
    // 画面遷移させる
    window.location.href = '/item/';
  }else{
    // 削除する
    $(this).css("display","none");
  }
})
```

`e.target`でクリックした最小の要素を取得し、その親要素に`delete-btn`が含まれているかで分岐する

# jQueryで生成した要素からのクリックを受け付ける

PHPやHTMLで直接定義されたDOMは特に意識せずにclick関数を使用できるが

jQueryで生成したDOMに対してのclick関数を使用するときはタイミングが重要になってくる

具体例を上げると、非同期処理でfetchしてきた結果を使いDOMを生成している場合  
その生成後にclick関数を定義しなければ動かない  
※click関数が定義された時点でDOMが存在しないときは動かない





