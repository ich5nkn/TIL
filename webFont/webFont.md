# Webフォントとは

web上で公開されているフォントデータ

WEBサイトで、通常フォントを指定すると、ユーザのPC内に存在しない場合、デフォルトのフォントになる

WEBフォントを使えば、クライアントの環境に依存せず、同じフォントデータを表示させることができる

# 使いかた

Google Fonts などが有名 [[ リンク ]](https://googlefonts.github.io/japanese/#roundedmplus1c)

まずは、HTMLでフォントを読み込む必要がある

次に、使いたい場所でCSSの`font-family`を定義する

全体で使いたい場合は、上の方で指定しておく

`material-ui`のフォントは別で指定してあるため、material-uiの部品に適用する場合は指定する必要がある

例：`app.js`の`ThemeProvider`を指定しているところで指定する

```
const theme = createMuiTheme({
    palette: {
        primary: cyan,
    },
    typography: {
        fontFamily: [
            'Noto Sans JP',
            // 'M PLUS Rounded 1c',
            'Roboto',
            'Arial',
            'sans-serif',
        ].join(','),
    }
});
```
