# yarn dev/build/start したときに何が起きているのか

`yarn xxx`した際の動きは`package.json`に記載されている

試しにnextype系のプロジェクトを参考にすると

```
"scripts": {
  "dev": "ts-node-dev --respawn --transpileOnly --project tsconfig.server.json -r tsconfig-paths/register --ignore-watch node_modules --ignore-watch pages --ignore-watch components/ui --ignore-watch .next --ignore-watch seeder --ignore-watch @garage --ignore-watch orm/migrations server.ts",
  "build": "next build && tsc --project tsconfig.server.json",
  "start": "cross-env NODE_ENV=production node -max-old-space-size=2048 dist/server.js",
}
```

このように記述してある

### yarn build をしたとき

`build`を例に挙げると、`next build`をした後に、`tsc tsconfig.server.json`をしている（op省略）

`next build`をするとNext.jsが動き、pages配下のコンポーネントを`/.next`にコンパイルする

このときに、`next.config.js`で追加の設定をすることができる（らしい）

```js
// next.config.js
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    pageExtensions: ['page.tsx','page.jsx'],
    publicRuntimeConfig: {
        NODE_ENV:process.env.NODE_ENV
    }
});
```

`tsc tsconfig.server.json`はTypeScriptのコンパイル

```json
// tsconfig.server.json
{
  "extends":"./tsconfig.json",
  "compilerOptions": {
    "module": "commonjs",
    "outDir": "dist",
    "target": "es2017",
    "isolatedModules": false,
    "noEmit": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  },
  "include": [
    "controller/**/*.ts",
    "orm/**/*.ts",
    "config/**/*.ts",
    "components/lib/**/*.ts",
    "server.ts"
  ],
  "exclude": [
    "@garage",
    "orm/migrations",
    "pages",
    "next",
    "static",
    "components/ui"
  ]
}
```

`"include"`に対象ファイルが書いてあり、`"exclude"`に除外ファイルが書いてある

コンパイル結果の出力先は`"outDir"`に書いてある`"dist"`

`tsconfig.json`も`extends`されているため、こちらも実行されている

```json
//tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@global/*": [
        "pages/_global/*"
      ],
      "@components/*": [
        "components/*"
      ],
      "@lib/*": [
        "components/lib/*"
      ],
      "@ui/*": [
        "components/ui/*"
      ],
      "@reports/*": [
        "components/reports/*"
      ],
      "@models/*": [
        "orm/models/*"
      ],
      "@config/*": [
        "config/*"
      ],
      "@controller/*": [
        "controller/*"
      ]
    },
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "preserve",
    "lib": [
      "dom",
      "es2017"
    ],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noUnusedLocals": true,
    "noImplicitAny": false,
    "locale": "ja-jp",
    "esModuleInterop": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "noUnusedParameters": true,
    "preserveConstEnums": true,
    "removeComments": false,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "target": "es5",
    "strictPropertyInitialization": false,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true
  },
  "exclude": [
    "dist",
    ".next",
    "next.config.js",
    "orm",
    "server.ts",
    "@garage"
  ],
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ]
}
```

最終的に`.next`にnext.jsのコンパイル結果、`dist`にtsのコンパイル結果が配置される

### yarn start をしたとき

`cross-env NODE_ENV=production`で環境変数をセットし、`node dist/server.js`でサーバを起動している

`cross-env`はWindowsやLinuxなどのOSを考慮せず環境変数を扱うことができるモジュール

`yarn dev`の実行時と挙動を分けるために`env`に書き込んでいる

次に`dist/server.js`をNode.jsで実行している

server.jsの中身はserver.tsをコンパイルした結果

```js
// server.ts

import 'reflect-metadata';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = !['production'].includes(process.env.NODE_ENV + '');
const app = next({ dev });
const handle = app.getRequestHandler();

if (!dev) {
    require('module-alias/register');
}

import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { createConnection } from 'typeorm';

import { parse } from 'url';


app.prepare().then(async () => {

    await createConnection();

    const server = express();


    useExpressServer(server, {
        routePrefix: '/api', // ルーティングコントローラの接頭辞
        controllers: [
            __dirname + '/controller/*' + (dev ? '.ts' : '.js')
        ]
    });

    server.get('^(?!/api)*', (req, res) => {
        const parsedUrl = parse(req.url!, true);
        const { pathname, query } = parsedUrl;

        handle(req, res, { pathname, query } as any);

    });


    server.listen(port, err => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on http://localhost:${port}`);
    });
});

```

主にやっていることは、`express`を使いサーバを起動し、`routing-controller`と`typeORM`を適用している

`routeing-controller`で`/api`にリクエストを行った際のルーティングを行っている（/controller配下）

`typeORM`の`createConnection()`メソッドを実行すると、`ormconfig.js`内の設定をもとにmappingされる（≒DBの起動？）





