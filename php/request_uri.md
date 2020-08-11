### ページのURLを取得する方法

`$_SERVER['REQUEST_URI']`で取得できる

### 必要な情報の切り出し方

```php
// pathinfoオブジェクトを生成する
$URI = pathinfo($_SERVER['REQUEST_URI']);
// ファイル名か、最下層のディレクトリ名を取得
$filename = $URI['basename'];
// ディレクトリ名か、ひとつ上の階層までのパスを取得
$dir = $URI['dirname'];
```

[[ 参考 ]](https://www.flatflag.nir87.com/basename-844)
