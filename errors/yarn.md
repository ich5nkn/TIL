# yarn

### The 'yarn' command exists in these Node versions: xx.xx.x

特定のnodeでしかyarnが使えないという内容

原因はnpmからyarnをinstallしていること

公式ではnpmからのyarnインストールは非推奨

`which yarn` でyarnが格納されているディレクトリを調べ、npm配下だったら削除

HomeBrewからyarnをインストールし直せば解決した

### Incorrect integrity when fetching from the cache

グローバルキャッシュが原因のエラーらしい？


`$ yarn cache clean` で解決

### ERROR in multi ./resources/js/app.js ./resources/sass/app.scss

エラーメッセージ

```
 ERROR  Failed to compile with 1 errors                                 14:51:34

This dependency was not found:

* /Users/koga/projects/MAR/resources/js/app.js in multi ./resources/js/app.js ./resources/sass/app.scss

To install it, you can run: npm install --save /Users/koga/projects/MAR/resources/js/app.js
       Asset      Size   Chunks             Chunk Names
/css/app.css  1.79 MiB  /js/app  [emitted]  /js/app
  /js/app.js  4.81 KiB  /js/app  [emitted]  /js/app

ERROR in multi ./resources/js/app.js ./resources/sass/app.scss
Module not found: Error: Can't resolve 'babel-loader' in '/Users/koga/projects/MAR'
 @ multi ./resources/js/app.js ./resources/sass/app.scss /js/app[0]
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! MAR@1.0.0 development: `cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js`
npm ERR! Exit status 2
npm ERR!
npm ERR! Failed at the MAR@1.0.0 development script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/koga/.npm/_logs/2020-07-28T05_51_34_479Z-debug.log
error Command failed with exit code 2.
```

`Laravel` + `React` のプロジェクトで`yarn dev`や`yarn hot`をしたときにエラー

なかなか原因が分からずに苦戦した

yarnではなく、npmを使用したところ、動いた（`yarn.lock`や`node_modules`は削除）
