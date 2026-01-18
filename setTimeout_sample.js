// === setTimeout サンプル集 ===
// 使い方: node setTimeout_sample.js [番号]
// 例: node setTimeout_sample.js 1

const sampleNumber = process.argv[2];

const samples = {
  // 1. 基本的な使い方
  1: () => {
    console.log('【基本】開始');
    setTimeout(() => {
      console.log('【基本】2秒後に実行されました');
    }, 2000);
  },

  // 2. 引数を渡す
  2: () => {
    console.log('【引数】開始');
    setTimeout((name, message) => {
      console.log(`【引数】${name}さん、${message}`);
    }, 2000, '太郎', 'こんにちは！');
  },

  // 3. タイマーのキャンセル
  3: () => {
    console.log('【キャンセル】タイマーをセット');
    const cancelId = setTimeout(() => {
      console.log('【キャンセル】これは表示されない');
    }, 2000);
    clearTimeout(cancelId);
    console.log('【キャンセル】タイマーをキャンセルしました');
  },

  // 4. カウントダウン
  4: () => {
    console.log('【カウントダウン】開始');
    setTimeout(() => console.log('   3...'), 1000);
    setTimeout(() => console.log('   2...'), 2000);
    setTimeout(() => console.log('   1...'), 3000);
    setTimeout(() => console.log('   発射！'), 4000);
  },

  // 5. イベントループの仕組み
  5: () => {
    console.log('【イベントループ】A');
    setTimeout(() => {
      console.log('【イベントループ】C (delay=0でも後で実行)');
    }, 0);
    console.log('【イベントループ】B');
  },

  // 6. ネストしたsetTimeout
  6: () => {
    console.log('【ネスト】開始');
    setTimeout(() => {
      console.log('【ネスト】最初の処理（2秒後）');
      setTimeout(() => {
        console.log('【ネスト】次の処理（さらに1秒後）');
      }, 1000);
    }, 2000);
  }
};

// ヘルプ表示
function showHelp() {
  console.log('使い方: node setTimeout_sample.js [番号]\n');
  console.log('番号一覧:');
  console.log('  1 - 基本的な使い方');
  console.log('  2 - 引数を渡す');
  console.log('  3 - タイマーのキャンセル');
  console.log('  4 - カウントダウン');
  console.log('  5 - イベントループの仕組み');
  console.log('  6 - ネストしたsetTimeout');
}

// 実行
if (!sampleNumber || !samples[sampleNumber]) {
  showHelp();
} else {
  samples[sampleNumber]();
}
