/**
 * Promise
 */

 function wait(duration: number) {
   return new Promise(resolve => {
     setTimeout(() => resolve(`${duration} ms passed`), duration)
   })
 }

/**
 * 推論される resolve の型は
 * resolve: (value?: unknown) => void
 *
 * 推論される waitの型は Promise<unknown>
 * function wait(duration: number): Promise<unknown>
 */

function wait2(duration: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${duration} ms passed`), duration)
  })
}

 /**
  * wait2の戻り値に型指定をすることで、resolveの型推論で、引数string型を設定できる
  * (parameter) resolve: (value?: string | PromiseLike<string> | undefined) => void
  */

function wait3(duration: number) {
  return new Promise<string>(resolve => {
    setTimeout(() => resolve(`${duration} ms passed`), duration)
  })
}

/**
 * Promiseオブジェクト生成時に　型を指定する方法でも良い
 */

/**
 * async/await
 */

async function queue() {
  const message = await wait3(1000)
  return message
}

/**
 * Promise.race Promise.all
 */

function waitThenString(duration: number) {
  return new Promise<string>(resolve => {
    setTimeout(() => resolve(`${duration} ms passed`), duration)
  })
}

function waitThenNumber(duration: number) {
  return new Promise<number>(resolve => {
    setTimeout(() => resolve(duration), duration)
  })
}

/**
 * Promise<[string, number, string]>として推論される
 */
function waitAll() {
  return Promise.all([
    waitThenString(10),
    waitThenNumber(100),
    waitThenString(10000)
  ])
}

/**
 * Promise<string | number> と推論される
 */
function waitRace() {
  return Promise.race([
    waitThenString(10),
    waitThenNumber(100),
    waitThenString(10000)
  ])
}
