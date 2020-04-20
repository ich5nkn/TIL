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
