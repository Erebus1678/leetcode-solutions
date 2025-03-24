
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
