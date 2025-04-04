// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100

async function sleep(millis: number): Promise<void> {
  return new Promise((r) => setTimeout(r, millis))
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
