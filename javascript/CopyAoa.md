### 浅いコピー

```
const aoa = [[1,2,3],[1,2,3],[1,2,3]]
const copyAoa = aoa

copyAoa[1].push(4)

console.log(aoa[1]) // [1,2,3,4]
```

関数の引数で多次元配列を受け取れば、深いコピーになると思っていたが、違った

```
const makeCopyAoa = (aoa:number[][]):number[][] => {
    return aoa
}

const aoa = [[1,2,3],[1,2,3],[1,2,3]]
const copyAoa = makeCopyAoa(aoa)

copyAoa[1].push(4)

console.log(aoa[1]) // [1,2,3,4]
```

```
const pushAoa = (aoa:number[][]):void => {
    aoa[1].push(4)
}

const aoa = [[1,2,3],[1,2,3],[1,2,3]]

pushAoa(aoa)
console.log(aoa[1]) // [1,2,3,4]
```

### 深いコピー（２次元配列）

```
const makeDeepCopyAoa = (aoa:any[][]):any[][] => {
    return aoa.map(line => [...line])
}

const aoa = [[1,2,3],[1,2,3],[1,2,3]]

const copyAoa = makeDeepCopyAoa(aoa)
copyAoa[1].push(4)
console.log(aoa[1]) // [1,2,3]
```
