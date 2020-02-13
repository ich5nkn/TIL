# UIDとは

UserIDの略でユーザを一意に識別するためのID

Unix系のOSでは必ずユーザでログインした状態でサービスを動かす

`id` コマンドで現在のユーザのUIDが調べられる

ちなみにGIDはGroupIDの略でほぼ同じ意味

基本的に初期値は`usrName=USER uid=1000`

サーバにHTTP接続してきたユーザは`usrName=http uid=33` など

１０００番以下のUIDはウェルノウンポートのように自由に使えない

# DockerにおけるUID

コンテナ内にもUIDが存在するため、ホストマシンとコンテナ内のUIDが違うと共有しているディレクトリへの書き込みや読み込みに不都合が起こる可能性がある

コンテナ内に入ってUIDを書き換えるかDockerFileでコンテナ作成時にユーザを作成するように編集し、コンテナを動かすユーザを作成したユーザに変更するなどといった作業が必要

UID変更のコマンド `usermod -u 変更後のUID 変更したいユーザ名`

※WordPressコンテナで上記のやり方ではうまく行かなかった

Wordpressコンテナではコンテナ起動時にUID33でapacheを動かしているが、そのユーザのUIDを変更してもapacheを動かしているUIDは33のままである

そのため存在しないユーザがUID33でapacheを動かしている状態になってしまう

起動前にUIDを変更するdockerFileを作成・ビルドし、Docker-composeでそれを動かす　[参考](https://qiita.com/nobrin/items/09656089f012184deae1)

