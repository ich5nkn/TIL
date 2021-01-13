### Material-UIのNoSsrというコンポーネントで`Next.js`のSSRを拒否することができる

[ 公式ドキュメント ](https://material-ui.com/api/no-ssr/)

`Next.js`のバージョン10.0でも使用できた

`_app.tsx`でインポートして、Material-UIのプロバイダを囲むだけで実装できる

SSRをやめてすべてCSRになる

Next.jsでもCSRにする方法はあるみたい（dynamic import）だが、こちらのほうが簡単

SEOが関係ないサービス（社内向けの業務システムなど）はSSRで不都合が起きた場合この方法もアリ

### 確認方法

ページを表示した後に、「ページのソースを表示」を行う

SSRの場合、HTMLの`<div id="_next">`タグの中に要素がレンダリングされているが、  
CSRの場合、クライアント側のJSで生成しているため、空になっている
