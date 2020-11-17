### エルビス演算子とは

```
// JSではこの書き方はできない
val = a ?: b;
```

aがtrue（存在する）だったら、a、false（undefinedなど）だったらbを返す

```
const val = a || b
```

このように書くことでjsでも同じ挙動になる
