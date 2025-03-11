// JavaScript is ⛔ single-threaded⛔, meaning it ⛔executes one command at a time⛔
// in a single call stack. This means that JS can only do one thing at a time—it does not run multiple
//  operations in parallel (like multi-threaded languages such as Java or C++).

// 📌 JavaScript  Execution Context and Its Types📌

// The Execution Context in JavaScript defines the environment in which code is 
// executed. It defines:

//1: What variables and functions are available at a given time.
//2: How JavaScript executes code (line by line).
//3: How scopes and this work.

// When JavaScript code runs, it goes through two phases:
// 1️⃣ Types of Execution Contexts
//🟡 1. Global Execution Context (GEC):
// Created when a JavaScript file runs.
// Stores global variables and functions.
// It is the default execution context (referred to as this in browsers).

console.log(this);  // In browsers, `this` refers to `window`


// 🟡 2. Function Execution Context (FEC):
// Created whenever a function is called.
// Each function gets its own execution context.
// Has its own variable environment and this value.

function greet() {
    let name = "Neha";
    console.log(name);  // "Neha"
}
greet();  // Creates a new execution context


// 2️⃣ Execution Context Phases

/*
Every execution context goes through two phases:

🔵1. Creation Phase (Memory Allocation)
JS scans the code before execution and:
Assigns undefined to variables (var).
Stores function definitions in memory.
Sets this and arguments object.

🔵2. Execution Phase (Code Runs)
JavaScript executes the code line by line.
Assigns values to variables and executes functions.

*/

// 3️⃣ Execution Stack (Call Stack)
/*
JavaScript uses a stack (LIFO - Last In, First Out) to manage execution contexts.
The Global Execution Context (GEC) is always at the bottom.
Each function call creates a new execution context and is pushed onto the stack.
When a function finishes, its execution context is popped from the stack.
*/

console.log(a);  // undefined (Hoisting)
var a = 10;

function first() {
    console.log("First");
    second();
}

function second() {
    console.log("Second");
}

first();
console.log("End");

/*
🅰️  Creation Phase (Memory Allocation)
🔹 JS scans the entire code before execution and does the following:

Variables declared with var are assigned undefined.
Functions are stored fully in memory (not undefined).
this is assigned a value (in browsers, this refers to window).


🅱️ Execution Phase (Code Runs)
Now, the code runs line by line in the Call Stack.

Step-by-Step Execution with Call Stack 📌
1️⃣ Global Execution Context (GEC) Starts
*/
console.log(a); // ✅ Outputs: undefined::: a is hoisted but not assigned a value yet, so it logs undefined.

/*
2️⃣ Assign value to a
*/
var a = 10;    //Now, a is updated from undefined → 10.

/*

3️⃣ Store function first() in memory
4️⃣ Store function second() in memory
5️⃣ Call first() → Creates a new Execution Context

first() is added to the Call Stack.
6️⃣ Execute console.log("First"); inside first()

✅ Prints: "First"
7️⃣ Call second() from first()

second() is added to the Call Stack.
8️⃣ Execute console.log("Second"); inside second()

✅ Prints: "Second"
9️⃣ Return from second(), remove from Call Stack
🔟 Return from first(), remove from Call Stack
1️⃣1️⃣ Global context resumes → Execute console.log("End");

✅ Prints: "End"


🆑 Key Concepts Related to Execution Context

✅ Hoisting
During the creation phase, JS moves variable and function declarations to the top.
*/
console.log(x);  // undefined (Hoisted): error nhi aai agar const se krte to error aata
                 //== temporaral dead zone in the const case
var x = 5;

/*
✅ Scope & Lexical Environment
Each execution context has a scope (local or global) that determines variable access.
*/
let a = 10;
function outer() {
    let b = 20;
    function inner() {
        console.log(a, b);  // ✅ 10, 20 (Lexical Scope)
    }
    inner();
}
outer();

/*
✅ Closures
Functions remember variables from their parent execution context.   
*/
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2 (Remembers `count`)

// Closures in JavaScript 🔥
// A closure is a function that remembers the variables from its lexical scope 
// even after the outer function has finished executing.
// A closure allows a function to access variables from an outer function 
// even after the outer function has returned.

// Example 1: Basic Closure 🏆
function outerFunction() {
    let count = 0; // Local variable in outer functiong

    function innerFunction() {
        count++; // Inner function can access count
        console.log(count);
    }

    return innerFunction; // Returning inner function
}

const counter1 = outerFunction(); // Outer function executed
counter(); // 1
counter(); // 2
counter(); // 3

/*
How It Works?
1️⃣ outerFunction() runs and creates a new execution context.
2️⃣ count is stored in outerFunction's scope.
3️⃣ innerFunction() is returned and assigned to counter.
4️⃣ When counter() is called, innerFunction remembers count even though outerFunction has finished executing.

✅ Closure keeps count alive!

Key Features of Closures 🚀
✅ Lexical Scope → Inner functions can access outer function variables.
✅ Data Privacy → Variables inside closures can't be accessed directly from outside.
✅ State Maintenance → Useful in scenarios like counters, event handlers, and more.

Where Are Closures Used? 🏆
1️⃣ Data Hiding & Encapsulation (e.g., private variables)
2️⃣ Event Listeners & Callbacks (e.g., setTimeout, setInterval)
3️⃣ Currying Functions
4️⃣ Memoization & Caching


*/




