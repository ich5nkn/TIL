### 一つのフォームに複数のPOSTボタンを配置する

- view

```
<form action='postData' >
  <input type='submit' value='送信' name="value1"/>
  <input type='submit' value='送信' name="value2"/>
  <input type='submit' value='送信' name="value3"/>
</form>
```

`input submit`はvalueがボタンの表示名になるため、valueを使用できない

そのため、nameに値を記述し、コントローラ側で存在するかにより分岐させる

- controller

```
public function index(Request $req){
  if(!empty($req->input('value1'))){
        $type = 1;
    }
    if(!empty($req->input('value2'))){
        $type = 2;
    }
    if(!empty($req->input('value3'))){
        $type = 3;
    }
}
```
