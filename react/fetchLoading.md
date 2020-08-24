### やりたいこと

画面に４つのセレクトボックスがあり、セレクトボックスの中身はDBからfetchしてくる（別テーブル）

４つのfetchは非同期処理で同時に処理しつつ、読み込み終わった後のローディングフラグは４つとも終わってからfalseにしたい

```js
const [vegeName, setVegeName] = useState('0');
const [department, setDepartment] = useState('0');
const [sellClass, setSellClass] = useState('99');
const [buyClass, setBuyClass] = useState('99');

const [vegeNameList, setVegeNameList] = useState([{ 'HINCD': '0', 'HINNMJ': '全品名' }]);
const [departmentList, setDepartmentList] = useState([{ 'NUMCD': '0', 'MEISHOJ1': '全部課' }]);
const [sellClassList, setSellClassList] = useState([{ 'NUMCD': '99', 'MEISHOJ1': '全選択' }]);
const [buyClassList, setBuyClassList] = useState([{ 'NUMCD': '99', 'MEISHOJ1': '全選択' }]);
const [loading, setLoading] = useState(true);

const getList = (pathName, listName, setter) => {
    const p = new Promise(() => {
        fetch('/api/arrival/' + pathName).then(res => {
            return res.json();
        }).then(json => {
            setter([...listName.slice(0), ...json]);
        });
    });
    return p;
};

useEffect(() => {
    const promise = Promise.all([
        getList('vegeName', vegeNameList, setVegeNameList),
        getList('department', departmentList, setDepartmentList),
        getList('sellClass', sellClassList, setSellClassList),
        getList('buyClass', buyClassList, setBuyClassList),
    ]);
    promise.then(setLoading(false));
}, []);

```

これでは実現できなかった

質問したら、fetchのそれぞれにloadingフラグを付けて、４つ終わったら表示するようにするか

fetchを一つにまとめる（４つのクエリをまとめたコントローラを作る）方法しかないとのこと。
