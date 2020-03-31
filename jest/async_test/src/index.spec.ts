import { fetchData, fetchDataReject } from './index'

// Resolve cases
test('test fetch data (use resolves)', () => {
  // 非同期の処理が完了するのを待ち受けるため
  // アサーション(Promise)をreturnする必要がある
  return expect(fetchData()).resolves.toEqual('test')
})

test('test fetch data (use await)', async () => {
  // 普通にawaitで待っても良い
  expect(await fetchData()).toEqual('test')
})

test('test fetch data (use both)', async () => {
  // アサーションを返す代わりに、awaitで待っても良い
  await expect(fetchData()).resolves.toEqual('test')
})

// Reject cases
test('test fetch data reject (use rejects)', () => {
  // 非同期の処理が完了するのを待ち受けるため
  // こちらもアサーション(Promise)をreturnする必要がある
  return expect(fetchDataReject()).rejects.toEqual(new Error('error'))
})

test('test fetch data reject (use await)', async () => {
  // 自前でawaitで待つときには、catchのアサーションが呼ばれていることを確認するために、想定するアサーションの数を設定しておく
  // これがないと、Promiseがrejectされなかった場合(catch内が呼ばれなかった)にテストが失敗にならない。
  expect.assertions(1)
  try {
    await fetchDataReject()
  } catch (e) {
    expect(e).toEqual(new Error('error'))
  }
})

test('test fetch data reject (use await)', async () => {
  // こちらもアサーションを返す代わりにawaitで待っても良い
  await expect(fetchDataReject()).rejects.toThrow(new Error('error'))
})

