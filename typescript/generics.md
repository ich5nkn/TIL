# Generics

関数を使用する際に型を渡して、その型を使うことで柔軟な型定義をすることができる


```
const log:<T>(arg:T)=>void = arg => {
  console.log(arg)
}
```

この例だとargがstring型でも、number型でも許可される

返り値に使用することもできる

```
const pickOne:<T>(arg:T[])=>T = arg => {
  return arg[0]
}
```

fetchのラッパーを作成した際に使用することで返り値に型を付けることができた
```
interface resStatus {
    statusCode: number;
    message?: string;
}

type jwtFetch = <T>(
    url: string,
    options: undefined | options
) => Promise<T & resStatus>;

const jwtFetch: jwtFetch = async (url, options) => {
  // fetch処理
  const res = await fetch(hoge)
  return res;
}

```
