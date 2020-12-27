### DynamicRoutingでクエリパラメータを受け取る際に、受け取れないことがあった


`detail/[id].tsx`
```
const Detail = (): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
      console.log(router.query.id);
    }
  });

  return <div>{router.query.id}</div>
}

```

こんなかんじで、`useEffect`を使ってマウント時にrouter.queryを取得したが、コンソールに出力された値は`{}`だった

公式によると、

> 自動静的最適化によって静的に最適化されたページは、ルートパラメータが提供されないままハイドレーションされます。
> ハイドレーションの後、Next.jsはアプリケーションの更新をトリガーにして、クエリオブジェクトにルートパラメータを提供します。

つまり、初回のuseEffectが実行されたときは`router.query`は空になる（その後、`router.query`に値がセットされる）

`router`には`query`以外にも`asPath` , `route`などのプロパティがある

`useEffect`の第２引数に`router`をセットし、それぞれの動きを確認してみた

最初は`router.asPath`と`router.route`の値が等しかったが、`router`が変化した際に、`router.asPath`の値が変化し、`router.query`がセットされていた

つまり、以下のように書けばよさそう

```
const Detail = (): JSX.Element => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (router.asPath !== router.route) {
      console.log(router.query.id);
      setLoading(false);
    }
  }, [router]);
  
  return <div>{router.query.id}</div>
}

  
```

[[参考（Qiita）]](https://qiita.com/hourglasshoro/items/f105e31149d103cf0597)
[[参考]](https://ryotarch.com/javascript/react/next-js-router-query-undefined-on-first-rendering/)
