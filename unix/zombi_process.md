## ゾンビプロセスの対処法

`yarn start`でReactアプリを立ち上げる最に、ポートがすでに使われているというエラーが出た

ターミナルを全て閉じ、Dockerのプロセスも全て消したが、使われていた

`localhost:8080`にブラウザからリクエストを送ったら、たしかに何かあった

HMRの残骸（ゾンビプロセス）らしい

### ローカルホストの○番ポートで何のプロセスが立ち上がっているかを調べる

```
lsof -n -P -i : {port number}
```

例 : Reactアプリを3000ポートで立ち上げていた場合

```
# lsof -n -P -i:{3000}
COMMAND   PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    63358 hoge   80u  IPv6 0x72311b73c4e7b225      0t0  TCP *:3000 (LISTEN)
```

### プロセスIDを調べる

```
ps aux | grep node
```

nodeの場合は、VSCodeやInsomniaなどにも使われており、大量に出てくるので閉じておいたほうが見つけやすい

```
hoge      63407   0.0  0.2  4592500  29816 s003  S+    3:38PM   0:00.16 /Users/~~~（略）
```

### 対象のプロセスをkillする（複数ある場合もある）

```
kill -9 63407
```
