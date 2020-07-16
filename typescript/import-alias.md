tsconfig.jsonファイルでコンパイラオプションに指定することで、importのaliasを書くことができる

以下サンプル

```
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
    
    ~~ 省略 ~~
```

検索用：`import` `atmark` `@path`
