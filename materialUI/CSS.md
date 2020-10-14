# material-uiの外見を変更する

material-uiのAPIにCSSと記述されている部分がある

ここは主に外見を変更するためのもの

# 例

``` jsx
<FormControlLabel
  control={<Checkbox
    color='primary'
    checked={this.state.tickets.teacherTicket}
    disabled={this.state.otherDiscount.isKSC || players.classNamesId === 9 || this.state.tickets.discountTicket || this.state.hole > 2 || this.state.otherDiscount.isNoCart || this.state.otherDiscount.isFlyer}
    onChange={() => { this.setState({ tickets: { ...this.state.tickets, teacherTicket: !this.state.tickets.teacherTicket } }, () => { this.feeCalc(); }); }}
  />}
  label="職員等割引"
/>
```

このパーツのlabelに色をつけたい
