var createCounter = function (n: number) {
  let numb = n
  return function () {
    const res = numb
    numb++
    return res
  }
}
