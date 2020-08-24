# MARでコンロトーラを作成する手順

### モデルの作成

`app`配下にモデルの定義を作成する

ファイル名とクラス名をあわせる必要がある

複合キーはインデックスの順番で配列にする

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HAN_SIRJNL extends Model
{
    // テーブル名指定
    protected $table = 'HAN_SIRJNL';

    // 複合キー
    protected $primaryKey = ['KAISHACD', 'NYKYMD','KANRINO','KANRIGNO'];

    // increment無効化
    public $incrementing = false;
}
```

### コントローラーの作成

`app/http/controllers/api`配下に作成する

こちらもファイル名とクラス名をあわせる

`namespace`を、ファイルを置くディレクトリに合わせる

`use`を使って、さっき定義したモデルファイルをインポートする

クエリの書き方は、`->`でチェーンして記述する、[[ リファレンス ]](https://readouble.com/laravel/5.7/ja/eloquent.html)

```php
<?php

namespace App\Http\Controllers\Api\Arrival;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use App\User;
use App\Http\Resources\UserResource;
use App\Mail\RegisterMail;
use Illuminate\Support\Facades\Mail;
use App\HAN_SIRJNL;

class HanSirjnlController extends Controller
{

    public function vegeName(Request $request){
        $req = $request->all();
        $query = HAN_SIRJNL::select('HAN_SIRJNL.HINCD','MST_HINMST.HINNMJ');
        $query->distinct();
        $query->join('MST_HINMST','HAN_SIRJNL.HINCD','=','MST_HINMST.HINCD');
        $query->orderBy('HAN_SIRJNL.HINCD');
        return $query->get();
    }
}

```

### Laravelのルーティングに指定

`routes`配下にルーティングを指定する

基本的に`api.php`に追加で記述する

第1引数にURLのpath、第2引数にコントローラのpathとメソッド名を記述する

```
Route::get('arrival/vegeName','Arrival\HanSirjnlController@vegeName');
```

これで、ブラウザから`/api/arrival/vegeName`にアクセスすると、Getできる

### React側の設定

ReactからはjwtFetchなどでfetchしてくればいつもどおり使える
