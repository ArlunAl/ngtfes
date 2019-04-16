## html css 設計

### QUESTION:

メディアクエリの区切り値は何種類で何？

### 基本構造

[flocss](https://github.com/hiloki/flocss
)を採用

### class命名規則

基本は[mindBEMding]()を採用

- `Block__element--modifier` を基本とする
    - `Block__element -modifier`は検討するべきだが、使ってもいいだろう
        - カスケーディングの問題が怖い
- `-modifier` 単体にcssを書いてはいけない
    - 他の場所の同じmodifierに影響する(汚染)
    - これはmodifierが2つ以上ある時に重複するかもしれないという不安と、
    - 複数のmodifierを簡単に記述できる(可読性を上げる)可能性がある
        - 色についてのmodifierと、大きさについてのmodifierがあれば、たくさんの組み合わせの可能性を作れる

- 基本的に空白は **margin** かつ **top** **left** だけを使う
    - 基本paddingは禁止
        - marginとpaddingが混ざった複雑な記述を避けるため
        - paddingで空間を作らないようにする
    - clickの当たり判定などはpaddingで指定する(marginではできない)

### scssからcssへのコンパイル

( 
長いね！ごめんよ！
要するにscss->cssに変えたいんだけど、@import先の変更も見て欲しいから
node-sassってのを使いたいんだ！ 
)

- *npm*([node.js](https://nodejs.org/ja/)についてくる)をダウンロードandインストール
    - npm: javascript用のモジュール管理ツール(pythonのpip)
- *node-sass*というモジュールを使用(インストール済み)
    - scssをwatch(後述)して自動コンパイルしてくれる
- `ngtfes/flocss`で`npx node-sass css/style.scss css/style.css -w`を実行
    - *npx*はnpmのコマンド。インストールしたモジュールを使用する
        - node-sassは指定したファイルをcssにコンパイルする
    - *node-sass* は実行モジュールの指定
    - *css/style.scss*はコンパイルしたいscssファイル名
    - *css/style.css*はコンパイル後のcssファイル名
    - *-w*は**watchモード**の指定
        - watchモード: コンパイルしたいファイルandそのファイルで@importしているファイルに変更があった時に、自動でコンパイルする

### html 構造

- タグを **箱** と **モノ** に分ける
- **箱** はmarginを持っても良い
- **モノ** は marginを持ってはいけない
    - 繰り返し使う上で上書きをする必要が生まれる
        - cssの詳細度の問題が発生する
- **モノ** は **箱** で包む
    - margin をつけやすくするため

- タグを **箱** と **モノ** に分ける
    - **箱**
        - 繰り返し使っても良い
            - marginの記述は`:not(:first-child)`(or`:nth-child(n+2)`)に記述すると良い
                - 2つめ以降の要素から適応される
                - yayoは`:not(:first-child)`で記述している
                    - (これは避けるべきかもしれない。わかりにくいかも)
    - **モノ** 
        - 繰り返し使う
        - marginを記述しない