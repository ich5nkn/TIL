Next-type環境で以下のエラーが発生

```
(node:17496) UnhandledPromiseRejectionWarning: Error: No available storage method found.
    at /Users/hoge/projects/golf-manage/node_modules/localforage/dist/localforage.js:2743:25
    at process._tickCallback (internal/process/next_tick.js:68:7)
(node:17496) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 58)
Error:
    at NotFoundError.HttpError [as constructor] (/Users/hoge/projects/golf-manage/src/http-error/HttpError.ts:19:22)
    at new NotFoundError (/Users/hoge/projects/golf-manage/src/http-error/NotFoundError.ts:10:9)
    at ExpressDriver.handleSuccess (/Users/hoge/projects/golf-manage/src/driver/express/ExpressDriver.ts:314:23)
    at /Users/hoge/projects/golf-manage/src/RoutingControllers.ts:161:45
    at process._tickCallback (internal/process/next_tick.js:68:7)
Error:
    at NotFoundError.HttpError [as constructor] (/Users/hoge/projects/golf-manage/src/http-error/HttpError.ts:19:22)
    at new NotFoundError (/Users/hoge/projects/golf-manage/src/http-error/NotFoundError.ts:10:9)
    at ExpressDriver.handleSuccess (/Users/hoge/projects/golf-manage/src/driver/express/ExpressDriver.ts:314:23)
    at /Users/hoge/projects/golf-manage/src/RoutingControllers.ts:161:45
    at process._tickCallback (internal/process/next_tick.js:68:7)
```

突然発生したので意味がわからなかったが、検索したらlocalForgeというパッケージのエラーっぽかった

stackOverFlowの回答やissueを読んでもわけが分からなかったが、`yarn upgrade`したら治った

パッケージも更新されていくのでよく分からないパッケージのエラーで詰まったら`yarn upgrade`してみる
