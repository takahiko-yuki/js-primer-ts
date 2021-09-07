# js-primer-ts
* 個人用のJSリハビリのためのリポジトリ。
* せっかくなのでtypescriptで書く

# 教材 & 参考URL
* [jsprimer.net](https://jsprimer.net/)
* [サバイバルTypeScript 〜実務で使うなら最低限ここだけはおさえておきたいTypeScript入門〜](https://book.yyts.org/)
* [TypeScript チュートリアル](https://qiita.com/EBIHARA_kenji/items/31b7c1c62426bdabd263)
  * uuid install commnad fix

```
npm i --save-dev @types/uuid
```
* [webpack入門](https://www.mitsue.co.jp/knowledge/blog/frontend/201912/05_0000.html)


# memo
* 型アサーション
  * Typescriptコンパイラに、変数の型を無視してOKと宣言. 型を上書きする
  * 型キャストは実際に型を変える
  * 本当は害. レガシーコードを移植できる
  * https://typescript-jp.gitbook.io/deep-dive/type-system/type-assertion