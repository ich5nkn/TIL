# PHP からMySQLに接続するためにPDOを使った

### まずPDOが対応しているかを調べる

```php
<?php

phpinfo();
```

と書かれたファイルをプロジェクト下に置いて、アクセスすると、現バージョンの対応一覧が見れる

PDOで検索して対応しているかを探す、対応していない場合は、他のDB接続方法を探す

### PDO接続設定

```php
<?php

try{
    $dbh = new PDO(
        'mysql:host=asdg.aaasdfamxj.ap-northeast-1.rds.amazonaws.com;dbname=mar_dev;charset=utf8;',
        // 'mysql:host=localhost;dbname=MAR',
        // 'mysql:host=mariadb;dbname=MAR',
        'user',
        'password'
    );
}catch (PDOException $e){
    header('Content-Type: text/plain; charset=UTF-8', true, 500);
    print_r('Error:'.$e->getMessage());
    die();
}
```

第一引数に、ホスト名とDB名を記述する

日本語が文字化けする場合は、文字コードを指定する

ローカルホストも設定できる

dockerでPHPとMySQLを立ち上げている場合は、ローカルホストではなく、コンテナ名のエイリアスを指定するので注意

この設定はDB接続をするたびに使うので外部ファイル化しておく

### fetchの仕方

```php
<?php

define('DIR', __DIR__);
include DIR."/db_connect.php";

$sth = $dbh->prepare('SELECT NUMCD,MEISHOJ1 from MST_SHOMST where KNRKBN = 2 and NUMCD in(101,205,206) order by NUMCD');
$sth->execute();

$data = array();
while($row = $sth->fetch(PDO::FETCH_ASSOC)){
    $data[]=array(
        'NUMCD'=>$row['NUMCD'],
        'MEISHOJ1'=>$row['MEISHOJ1'],
    );
}

header('Content-type: application/json');
echo json_encode($data);
```

