type Counter = {
  increment: () => number
  decrement: () => number
  reset: () => number
}

function createCounter2(init: number): Counter {
  let curr = init

  return {
    increment: () => (curr += 1),
    decrement: () => (curr -= 1),
    reset: () => (curr = init),
  }
}
