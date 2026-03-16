Here is the Japanese translation of the provided English Markdown chunk:

# openid-login
The Japanese README is here: [README.ja.md](README.ja.md)

GitHubを使ったOpenIDログインの簡単なサーバー。

## 機能
- GitHubを使用したOpenIDログインフローを実装
- ブラウザのローカルストレージにアクセストークンを保存
- ログイン成功後にユーザー情報を表示

## 要件
- Denoランタイム

## 使用方法
1. リポジトリをクローンする
2. ルートディレクトリに `client_secret.txt` ファイルを作成し、GitHub OAuthアプリのシークレットキーを書き込む
3. 提供された `run.sh` スクリプトを使用してサーバーを起動する:
   ```
   ./run.sh
   ```
4. ウェブブラウザで `http://localhost:8010` を開いてデモを確認する

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
