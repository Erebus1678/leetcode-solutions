function once<F extends (...args: any[]) => any>(
    fn: F
  ): (...args: Parameters<F>) => ReturnType<F> | undefined {
    let called = false;
  
    return (...args: Parameters<F>): ReturnType<F> | undefined => {
      if (!called) {
        called = true;
        return fn(...args);
      }
    };
  }