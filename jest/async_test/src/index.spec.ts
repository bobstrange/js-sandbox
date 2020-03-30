import { fetchData, fetchDataReject } from './index'

test('test fetch data', () => {
  return expect(fetchData()).resolves.toEqual('test')
})
