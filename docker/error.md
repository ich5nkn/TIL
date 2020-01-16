# Couldn’t connect to Docker daemon

テストサーバで `docker-compose up -d` を実行したところこのエラーが出た

意味はデーモンに接続できません

調べたら権限の問題だった

sudoをつけることで解決
