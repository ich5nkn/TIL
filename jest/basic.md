# Jestとは

JavaScriptの代表的なテスティングフレームワーク

Reactの`Create-React-App`にも採用されている

テストランナー？

関数の単体テストを実行する + playwrightなどのUIテストの起動も行う

# 使い方

### 基本

`__tests__`ディレクトリにテストコードを書くことが多い

`hogehoge.test.ts`というファイル名で.testをつける

テスト対象の関数をインポートし、テストを書く（関数をエクスポートする必要がある）

```js
import {sumOfArray} from '../functions'

describe('sumOfArray',()=>{
  test('normal',()=>{
    expect(sumOfArray([1,2]).toBe(3)
  })
})

```

基本的にtest関数内の第１引数にテスト名、第２引数にテスト内容を書く

expect()で関数に引数を渡して実行させ、toBe()メソッドに結果を指定する

イコールになったらテスト成功、ノットイコールはテスト失敗になる

toBe()メソッド以外にも結果を指定するメソッド(Matcher)は複数ある [[ 参考 ]](https://jestjs.io/docs/ja/using-matchers)

describe関数で囲むと、テストをグループ化して名前をつけることができる

一つの関数に様々な引数のパターンを渡してテストする際や、処理の流れなどをまとめる際につかう
