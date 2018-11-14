const assert = require('assert');

const possiblyRejected = () => {
  return Promise.reject(new Error('error'));
};

it('is bad pattern', () => {
  // possiblyRejctedがRejectedの場合 -> assetでerror.messageを検証したい
  return possiblyRejected().catch((error) => {
    assert(error.message === 'error');
  });
});

// FulFillするPromiseを返す
const wrongPossiblyRejected = () => {
  return Promise.resolve();
};

it('gets unexpected test result', () => {
  // possiblyRejctedがFulFilledの場合 -> テストは失敗してほしい
  // 実際はパスしてしまう
  // 理由: onFulFillの場合は、catchのブロックは呼ばれないので、assertも実行されない
  return wrongPossiblyRejected().catch((error) => {
    assert(error.message === 'error');
  });
});

const myFunc = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve();
    } else {
      reject(new Error('woops'));
    }
  });
};

it('correct test', () => {
  // myFunc(true) -> Fulfillの場合 想定していないので 例外になってテストは落ちてほしい
  // myFunc(false) -> Rejectの場合 error.message のassetをしてほしい
  // then ブロックに, onResolveとonReject両方を渡すことで実現
  return myFunc(false).then((result) => {
    throw new Error('Expected promise to be rejected but it was fulfilled');
  }, (error) => {
    assert(error.message === 'woops');
  });
})
