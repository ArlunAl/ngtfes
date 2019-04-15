### html css 設計

#### 基本構造

[flocss](https://github.com/hiloki/flocss
)を採用

#### class命名規則

基本は[mindBEMding]()を採用

- `Block__element -modifier` を基本とする
- `-modifier` 単体にcssを書いてはいけない
    - 他の場所の同じmodifierに影響する(汚染)

- 基本的に空白は **margin** かつ **top** **left** だけを使う
    - 基本paddingは禁止
        - marginとpaddingが混ざった複雑な記述を避けるため
        - paddingで空間を作らないようにする
    - clickの当たり判定などはpaddingで指定する(marginではできない)


#### html 構造

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
                - yayoは`:not(:first-child)`で記述している(これは避けるべきかもしれない)
    - **モノ** 
        - 繰り返し使う
        - marginを記述しない