### auth()->attempt

jwt認証を導入して、生成した`AuthController`で出てきた

パスワードをハッシュ化してDBに保存している場合、通常のSQLでは照合することができない

`bcrypt`を使ってパスワードを生成しても生成するたびに値が代わり、不可逆であるため

ただし、`auth()->attempt()`メソッドを使用すると照合できる

返り値は`jwt-token`で、`respondWithToken()`メソッドを使うことで、Bearerなどが取得できる



