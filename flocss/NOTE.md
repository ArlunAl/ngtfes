### css 設計

#### 基本構造

[flocss](https://github.com/hiloki/flocss
)を採用

#### class命名規則

基本は[mindBEMding]()を採用

- `Block__element -modifier` を基本とする
- `-modifier` 単体にcssを書いてはいけない
    - 他の場所の同じmodifierに影響する(汚染)
    