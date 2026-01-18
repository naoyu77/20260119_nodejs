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
