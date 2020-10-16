リレーションしていないテーブルから`LEFT JOIN`で値を引っ張ってくる際、  
`query.getSql()`で取得したSQL分を実行すると、値が取得できるのにAPIの返り値にはこない現象が発生した

```js
const query = getRepository(Register).createQueryBuilder('register')
    .select([
        'register.id',
        'register.code',
        'register.area',
        'register.address',
        'register.addressDetail',
        'register.tankCapacityClass',
        'register.donatedDate',
        'register.movedDate',
        'register.donation',
        'register.reason',
    ])
    .innerJoin(query => {
        return query.select('code', 'scode')
            .addSelect('MAX(movedDate)', 'maxDate')
            .from(Register, 'subregister')
            .groupBy('scode');
    },
        'sub',
        'code = sub.scode and (movedDate = sub.maxDate or sub.maxDate IS Null)')
    .orderBy('register.tankCapacityClass', 'ASC')
    .where('register.donatedDate IS NOT NULL')
    .andWhere('register.donation IN ("あり","あり（大家）")')
    .leftJoinAndSelect('register.applicant', 'applicant')
    .leftJoinAndSelect('register.tankCapacityClass', 'tankCapacityClass')
    .leftJoinAndSelect(Area, 'area', 'area = area.code'); // このAreaが取得できない
console.log(query.getSql());
return query.getManyAndCount();
```

最終行の`getManyAndCount`を`getRawMany`に変更したところ、APIで`Area`が取得できた

ただ、RawManyの場合はキー名が変わるため、フロント側PGの修正が必要。

また、`AndCount`は使用できないため、フロント側の`res.length`で対応した
