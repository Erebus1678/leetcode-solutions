var createCounter = function (n: number) {
  return function () {
    return n++
  }
}

const func = createCounter(1)

func()
func()
func()
func()
func()
console.log(func()) //6