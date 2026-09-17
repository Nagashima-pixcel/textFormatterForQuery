改行で区切られた文字列を 1 行ずつシングルクォート囲い、コンマ区切りの文字列に変換して出力します。
txt ファイルから読み出すことを前提にしているため、start コマンドの末尾にファイル名を追加して実行してください。

## 基本形式

```bash
pnpm format <ファイル名>
```

example-1
example-2
↓
'example-1',
'example-2'

## 丸括弧形式 (--paren)

`--paren` オプションを付けると、各値を丸括弧で囲った形式で出力します。

```bash
pnpm formatParen <ファイル名>
# または
npx ts-node index.ts --paren <ファイル名>
```

example-1
example-2
↓
('example-1'),
('example-2')

## 部分一致形式 (--like)

`--like` オプションを付けると、SQL の LIKE による部分一致検索用に、各値の前後へワイルドカード `%` を付与した形式で出力します。

```bash
pnpm formatLike <ファイル名>
# または
npx ts-node index.ts --like <ファイル名>
```

asdf
ghjk
↓
'%asdf%',
'%ghjk%'

`--paren` と併用すると、丸括弧で囲った形式になります。

```bash
npx ts-node index.ts --like --paren <ファイル名>
```

asdf
ghjk
↓
('%asdf%'),
('%ghjk%')
