# TypeScript

## reference

- TypeScript Deep Dive

# TypeScript入門 $ 環境構築

## なぜTypeScriptを使うのか

### TypeScriptの型システム

- 型を利用するかどうかは、完全に任意（オプション）である
- 可能な限り型推論を行う
- 明示的な型指定(型アノテーション)を行える
- 構造的な型を採用している
- 型チェックでエラーがあってもJavaScriptは出力される
- アンビエント宣言によって、既存のJavaScriptライブラリでも型を利用できる

型推論 :
  TypeScriptがソースコードを解析し、そのコードの流れから、
  変数や関数などの型を推測してくれる仕組み

### モダンなJavaScriptの機能を今すぐ利用できる