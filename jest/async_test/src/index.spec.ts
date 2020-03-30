import { fetchData, fetchDataReject } from './index'

// Resolve cases
test('test fetch data (use resolve)', () => {
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
