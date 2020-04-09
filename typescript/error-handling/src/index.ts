/**
 * ref: https://dev.classmethod.jp/articles/error-handling-practice-of-typescript/
 */

const zeroOrOne = Math.floor(Math.random() * 2)
const conditionalThrowError = () => {
  if (zeroOrOne === 0) {
    throw new Error('Something went wrong')
  }
}

/*
 * 1. 異常系の場合nullを返す
 */
async function fetchMaybeNull(): Promise<string|null> {
  try {
    conditionalThrowError()
    return await 'pattern1'
  } catch(e) {
    return null
  }
}

fetchMaybeNull()
  .then((res) => console.log(res))

class FetchError extends Error {}

/**
 * 2. 異常系の場合にErrorをthrowする
 */
async function fetchMaybeThrow(): Promise<string> {
  try {
    conditionalThrowError()
    return await 'pattern2'
  } catch (e) {
    throw new FetchError(e.message)
  }
}

fetchMaybeThrow()
  .then((res) => console.log(res))
  .catch((e) => console.error('FetchError:', e.message))

async function fetchMaybeReturnError(): Promise<string|FetchError> {
  try {
    conditionalThrowError()
    return await 'pattern3'
  } catch (e) {
    return new FetchError(e.message)
  }
}

/**
 * 3. 異常系の場合にErrorをreturnする
 */
fetchMaybeReturnError()
  .then((res) => {
    if (res instanceof FetchError) {
      console.error(res.message)
    } else {
      console.log(res)
    }
  })
