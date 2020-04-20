#Grid Item Props

RGL supports the following properties on grid items or layout items. When initializing a grid, build a layout array (as in the first example above), or attach this object as the data-grid property to each of your child elements (as in the second example).

Note that if a grid item is provided but incomplete (missing one of x, y, w, or h), an error will be thrown so you can correct your layout.

If no properties are provided for a grid item, one will be generated with a width and height of 1.

You can set minimums and maximums for each dimension. This is for resizing; it of course has no effect if resizing is disabled. Errors will be thrown if your mins and maxes overlap incorrectly, or your initial dimensions are out of range.

Any <GridItem> properties defined directly will take precedence over globally-set options. For example, if the layout has the property isDraggable: false, but the grid item has the prop isDraggable: true, the item will be draggable, even if the item is marked static: true.

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
