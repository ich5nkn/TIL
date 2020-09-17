一年前を取得する方法

```
const d = new Date()
const oneYearAgo = d.setFullYear(d.getFullYear() - 1)
```

注意点として、値はエポック秒で取得できるので、日付型として扱う場合は、さらに変換する

```
const targetYear = '2020-01-01'
const d = new Date()
const oneYearAgo = d.setFullYear(d.getFullYear() - 1)
const inThisYear = targetYear.getTime() > oneYearAgo
```

対象の日付が１年前未満かを調べる際に使用した

注意点として、`setFullYear`を使うと、元の日付自体を変更してしまう（破壊的変更）

これが原因で、reactのstateで持っていた日付が変更されていたので注意
