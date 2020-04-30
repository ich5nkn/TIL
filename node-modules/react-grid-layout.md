# Usage

他のコンポーネントと同様にReactGridLayoutを使用します。以下の次の例は、3つの項目を持つグリッドを生成します。

- ユーザーはアイテムをドラッグまたはサイズ変更できなくなります a
- アイテムbは、2グリッドブロックの最小幅と4グリッドブロックの最大幅に制限されます
- ユーザーはアイテムを自由にドラッグしてサイズ変更できます c

```js
import GridLayout from 'react-grid-layout';

class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
      </GridLayout>
    )
  }
}
```

子に直接レイアウトプロパティを設定することもできます。

```js
import GridLayout from 'react-grid-layout';

class MyFirstGrid extends React.Component {
  render() {
    return (
      <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
        <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>
        <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
      </GridLayout>
    )
  }
}
```

# Grid Item Props

RGLは、グリッドアイテムまたはレイアウトアイテムで次のプロパティをサポートします。グリッドを初期化するときは、（上記の最初の例のように）レイアウト配列を作成するか、このオブジェクトをdata-gridプロパティとして各子要素にアタッチします（2番目の例のように）。

グリッドアイテムが提供されているが不完全な場合（x、y、w、またはhのいずれかが欠落している場合）、レイアウトを修正できるようにエラーがスローされることに注意してください。

グリッドアイテムにプロパティが指定されていない場合は、幅と高さが1のプロパティが生成されます。

各ディメンションの最小値と最大値を設定できます。これはサイズ変更用です。もちろん、サイズ変更が無効になっている場合は効果がありません。最小値と最大値が正しくオーバーラップしていない場合、または初期の寸法が範囲外の場合、エラーがスローされます。

直接定義された<GridItem>プロパティは、グローバルに設定されたオプションよりも優先されます。たとえば、レイアウトのプロパティがisDraggable：falseで、グリッドアイテムのプロパティがisDraggable：trueである場合、アイテムがstatic：trueとマークされていても、アイテムはドラッグ可能になります。
  
```js
{

  // A string corresponding to the component key
  i: string,

  // These are all in grid units, not pixels
  x: number,
  y: number,
  w: number,
  h: number,
  minW: ?number = 0,
  maxW: ?number = Infinity,
  minH: ?number = 0,
  maxH: ?number = Infinity,

  // If true, equal to `isDraggable: false, isResizable: false`.
  static: ?boolean = false,
  // If false, will not be draggable. Overrides `static`.
  isDraggable: ?boolean = true,
  // If false, will not be resizable. Overrides `static`.
  isResizable: ?boolean = true
}
```

# メモ

CSSを割り当てないときれいな動きが再現できない

各ItemのState（xy座標やwidth,heightなど）は初期値であって、setStateしても画面上の描画は変わらない

画面上のItemの位置関係などはStateではなくもっと深いところで管理している・・？

そのため、最大化機能はGridのContainerごと上書きする方法をとった

Head部だけをドラッグ可能にする方法は検討中
