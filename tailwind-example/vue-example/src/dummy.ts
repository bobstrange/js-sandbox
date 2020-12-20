import dummy from './dummy_data.json'

const data = dummy.data

export type DummyData = typeof data[0]
export { data }
