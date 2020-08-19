### Git作業中に困ったのでメモ

個人での開発なので、ローカルのmasterブランチで作業をしていた途中で

お客様から別件で先に開発しなければならない案件をもらった

そのときに、作業中のソースはmasterに反映せずに別件だけ作業をしたい

`git checkout origin/master`で`git checkout -b`を試したが、エラー

GitLabの管理画面からマスターブランチを元にして新規ブランチを作成して事なきを得た

```
git fetch
git pull origin [branchName]
git checkout [branchName]
〜〜〜作業後〜〜〜
git push origin HEAD
```

### そもそもmasterブランチで直接作業するのは良くない！
