# Node.js 学習メモ

## setTimeout

JavaScriptの非同期処理の基本。指定したミリ秒後に関数を実行する。

### 構文

```javascript
setTimeout(callback, delay, arg1, arg2, ...)
```

- `callback`: 実行する関数
- `delay`: 遅延時間（ミリ秒）
- `arg1, arg2...`: コールバックに渡す引数（オプション）

### 基本的な使い方

```javascript
setTimeout(() => {
  console.log('2秒後に実行');
}, 2000);
```

### 引数を渡す

```javascript
setTimeout((name, message) => {
  console.log(`${name}さん、${message}`);
}, 2000, '太郎', 'こんにちは！');
```

### タイマーのキャンセル

```javascript
const timerId = setTimeout(() => {
  console.log('これは実行されない');
}, 5000);

clearTimeout(timerId);
```

### 注意点

- `delay=0` でも即座には実行されない（イベントループの次のサイクルで実行）
- 正確なタイミングは保証されない

## サンプルファイル

```bash
# ヘルプ表示
node setTimeout_sample.js

# 番号を指定して実行
node setTimeout_sample.js 1  # 基本
node setTimeout_sample.js 2  # 引数を渡す
node setTimeout_sample.js 3  # キャンセル
node setTimeout_sample.js 4  # カウントダウン
node setTimeout_sample.js 5  # イベントループ
node setTimeout_sample.js 6  # ネスト
```

## TypeScript

JavaScriptに型を追加した言語。開発中にエラーを早期発見できる。

### インストール

```bash
# package.jsonを作成
npm init -y

# TypeScriptとts-nodeをインストール
npm install -D typescript ts-node

# 設定ファイルを作成
npx tsc --init
```

### 基本的な使い方

```typescript
// hello.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('太郎'));
// greet(123);  // エラー: 数値は文字列に渡せない
```

### 実行方法

```bash
# ts-nodeで直接実行（コンパイル不要）
npx ts-node hello.ts

# tscでコンパイルしてから実行
npx tsc hello.ts  # hello.jsが生成される
node hello.js
```

### ポイント

- 型注釈（`: string`など）は開発中のエラー検出に使われる
- コンパイル後は普通のJavaScriptになる（型は消える）
- 大規模プロジェクトや複数人開発で特に有効
