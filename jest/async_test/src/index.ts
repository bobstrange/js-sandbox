export const fetchData = async (): Promise<string> => {
  return await 'test'
}

export const fetchDataReject = async () => {
  throw new Error('error')
}
