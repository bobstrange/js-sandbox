const succ = (n) => {
  return n + 1
}

const prev = (n) => {
  return n - 1
}

export const add = (x, y) => {
  if (y < 1) {
    return x
  }
  return add(succ(x), prev(y))
}
