# 概要

Next.jsのチュートリアルで出てきたnode-modules

MarkDownファイルの先頭につけたメタ情報を読み込むために使用

# 使い方

```
$ yarn add gray-matter
```

下記のようなMarkDownファイルを用意する

```md
---
title: 'gray-matterの使い方'
date: '2020-05-10'
tag: 'node-modules'
---

gray-matterの使い方を説明します

〜〜〜

おわり
```

gray-matterを使って読み込む

```js
import matter from 'gray-matter';
import fs from 'fs';

const filePath = '[filepath]'
const fileContents = fs.readFileSync(filePath, 'utf8')

const matterResuld = matter(fileContents)

console.log(matterResult.title) // gray-matterの使い方
```
