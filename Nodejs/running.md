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

## yarn build をしたとき

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

## yarn start をしたとき

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

## yarn prod したとき（Laravelの場合)

Laravelの場合も、yarnの実行スクリプトは`package.json`に書いてある

（ちなみにcomposerのスクリプトとパッケージの一覧は`composer.json`）

```
// package.json
"prod": "npm run production",
"production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
```

ここでは`"prod"`は`"production"`を動かしているに過ぎない

`"production"`は環境変数をセットし、`webpack.config.js`をもとに`webpack.js`を動かしている

`webpack.js`の中身は

```
#!/usr/bin/env node

// @ts-ignore
process.exitCode = 0;

/**
 * @param {string} command process to run
 * @param {string[]} args commandline arguments
 * @returns {Promise<void>} promise
 */
const runCommand = (command, args) => {
	const cp = require("child_process");
	return new Promise((resolve, reject) => {
		const executedCommand = cp.spawn(command, args, {
			stdio: "inherit",
			shell: true
		});

		executedCommand.on("error", error => {
			reject(error);
		});

		executedCommand.on("exit", code => {
			if (code === 0) {
				resolve();
			} else {
				reject();
			}
		});
	});
};

/**
 * @param {string} packageName name of the package
 * @returns {boolean} is the package installed?
 */
const isInstalled = packageName => {
	try {
		require.resolve(packageName);

		return true;
	} catch (err) {
		return false;
	}
};

/**
 * @typedef {Object} CliOption
 * @property {string} name display name
 * @property {string} package npm package name
 * @property {string} binName name of the executable file
 * @property {string} alias shortcut for choice
 * @property {boolean} installed currently installed?
 * @property {boolean} recommended is recommended
 * @property {string} url homepage
 * @property {string} description description
 */

/** @type {CliOption[]} */
const CLIs = [
	{
		name: "webpack-cli",
		package: "webpack-cli",
		binName: "webpack-cli",
		alias: "cli",
		installed: isInstalled("webpack-cli"),
		recommended: true,
		url: "https://github.com/webpack/webpack-cli",
		description: "The original webpack full-featured CLI."
	},
	{
		name: "webpack-command",
		package: "webpack-command",
		binName: "webpack-command",
		alias: "command",
		installed: isInstalled("webpack-command"),
		recommended: false,
		url: "https://github.com/webpack-contrib/webpack-command",
		description: "A lightweight, opinionated webpack CLI."
	}
];

const installedClis = CLIs.filter(cli => cli.installed);

if (installedClis.length === 0) {
	const path = require("path");
	const fs = require("fs");
	const readLine = require("readline");

	let notify =
		"One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:";

	for (const item of CLIs) {
		if (item.recommended) {
			notify += `\n - ${item.name} (${item.url})\n   ${item.description}`;
		}
	}

	console.error(notify);

	const isYarn = fs.existsSync(path.resolve(process.cwd(), "yarn.lock"));

	const packageManager = isYarn ? "yarn" : "npm";
	const installOptions = [isYarn ? "add" : "install", "-D"];

	console.error(
		`We will use "${packageManager}" to install the CLI via "${packageManager} ${installOptions.join(
			" "
		)}".`
	);

	const question = `Do you want to install 'webpack-cli' (yes/no): `;

	const questionInterface = readLine.createInterface({
		input: process.stdin,
		output: process.stderr
	});
	questionInterface.question(question, answer => {
		questionInterface.close();

		const normalizedAnswer = answer.toLowerCase().startsWith("y");

		if (!normalizedAnswer) {
			console.error(
				"You need to install 'webpack-cli' to use webpack via CLI.\n" +
					"You can also install the CLI manually."
			);
			process.exitCode = 1;

			return;
		}

		const packageName = "webpack-cli";

		console.log(
			`Installing '${packageName}' (running '${packageManager} ${installOptions.join(
				" "
			)} ${packageName}')...`
		);

		runCommand(packageManager, installOptions.concat(packageName))
			.then(() => {
				require(packageName); //eslint-disable-line
			})
			.catch(error => {
				console.error(error);
				process.exitCode = 1;
			});
	});
} else if (installedClis.length === 1) {
	const path = require("path");
	const pkgPath = require.resolve(`${installedClis[0].package}/package.json`);
	// eslint-disable-next-line node/no-missing-require
	const pkg = require(pkgPath);
	// eslint-disable-next-line node/no-missing-require
	require(path.resolve(
		path.dirname(pkgPath),
		pkg.bin[installedClis[0].binName]
	));
} else {
	console.warn(
		`You have installed ${installedClis
			.map(item => item.name)
			.join(
				" and "
			)} together. To work with the "webpack" command you need only one CLI package, please remove one of them or use them directly via their binary.`
	);

	// @ts-ignore
	process.exitCode = 1;
}
```

ここで１行目に記述してある`#!/usr/bin/env node`はシバン(shebang)と言う

それ以下のファイルを`node`で実行するという意味

つまりは、`yarn prod`も環境変数をセットし、`node.js`を実行している

最終的には`public/js`にビルド済みのコードは挿入され、それをLaravelがホスティングしている（？）

