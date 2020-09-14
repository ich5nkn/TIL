# typeormのfind内のクエリに不等号を追加するときのやりかた

### MoreThanとLessThanを使う

まずはインポート
```
import {
    FindConditions, MoreThan, LessThan,
} from 'typeorm';
```

find内のwhere句で使う

```
where: {
    monthString: dateString.slice(0, 7),
    dateString: LessThan(dateString),
    baseId: baseId,
    isDelete: false,
},
```

このようにLessThanをつけると、不等号をwhere句に含める事ができる

ただし、イコールはつかないので、「以下」を条件にしたい場合は

`Not ( MoreThan ( dateString ) )` のように符号を逆転する必要がある
