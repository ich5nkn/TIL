# fishでパスを通す方法

大体の手順書ではパスを通す際にbashのコマンドが書いてある

例： `echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile`

これは`.bash_profile` に `PATH="$HOME/.rbenv/bin:$PATH"` を書き込めの意

fishでは以下のように記述する

`set -U fish_user_paths $HOME/.rbenv/bin $fish_user_paths`
