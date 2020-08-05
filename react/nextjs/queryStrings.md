# Next.jsにおけるクエリストリングの受け取り方

### クラスコンポーネントの場合

```javascript
type Props = {
  id: string, // 文字列でしか受け取れない？
  name: string,
}

export default class App extends React.Component<Props>{
  
  static async getInitialProps({ query }: any) {
    return query;
  }
  .....
}
```

[[参考サイト]](https://www.it-swarm.dev/ja/next.js/nextjs%E3%81%AEurl%E3%81%8B%E3%82%89%EF%BC%88%E3%82%AF%E3%82%A8%E3%83%AA%E6%96%87%E5%AD%97%E5%88%97%EF%BC%89%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95%E3%81%AF%EF%BC%9F/832698468/)
