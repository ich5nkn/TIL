# map処理でasync/awaitを使う方法

```js
// mapをPromise.allで囲って、asyncにする
const data = async Promise.all(targets.map(async(v)=>{
  const res = await fetch.get(...)
  return res
}))
```

map内のawait処理を一旦ためて、一気にPromise.allで同期実行する？

この方法だと、awaitの処理を実行する順番を制御できない（処理が終わった順になる？）ので

letの変数に加算していくような処理と相性が悪い？？

例：下記のソースだと上手く動かなかった

```js
const months = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3',];
let sumGoal = 0;
const goals = await Promise.all(months.map(async (v) => {
            const monthString = yearString + '-' + ('00' + v).slice(-2);
            const monthlyres = await MonthlyTable.findOne({
                where: {
                    monthString: monthString,
                    baseId: baseId,
                }
            } as FindConditions<MonthlyTable>);
            sumGoal += await (monthlyres?.goalCount !== undefined ? monthlyres?.goalCount : 0)
            return sumGoal;
        }));
```

`[0,0,0,10,10,10,25,25,40,60..]`のようになってほしかったが、

`[0,10,10,10,0,0,15,0,10,10..]`のようにぐちゃぐちゃになってしまう

今回は、下記のように対処した

```js
const months = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3',];
        // 一旦、合計ではなく、単純な各月の値の配列を返す
        const goals = await Promise.all(months.map(async (v) => {
            const monthString = yearString + '-' + ('00' + v).slice(-2);
            const monthlyres = await MonthlyTable.findOne({
                where: {
                    monthString: monthString,
                    baseId: baseId,
                }
            } as FindConditions<MonthlyTable>);
            return monthlyres?.goalCount !== undefined ? monthlyres?.goalCount : 0;
        }));
        
let sumGoal = 0;
// ここで加算処理をawaitで後回しにして実行する
```

