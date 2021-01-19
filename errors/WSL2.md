WSL2を使ってWindows10にubuntuを入れる

```
実行しようとした操作は、参照したオブジェクトの種類ではサポートされていません。
```

というエラーが発生してubuntuが立ち上がらない

https://github.com/microsoft/WSL/issues/4177#issuecomment-597736482

このリンクにあるパッチをダウンロードして

```
NoLsp.exe c:\windows\system32\wsl.exe
```

とすることで解決した
