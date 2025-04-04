// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

 

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
/**
 * @return {null|boolean|number|string|Array|Object}
 */

declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function <T>(): T | -1 {
  if (!this.length) return -1;
  return this[this.length - 1];
};

export {};
/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
