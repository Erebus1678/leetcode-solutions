// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".


function createHelloWorld() {
    
    return function(): string {
        return 'Hello World'
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */