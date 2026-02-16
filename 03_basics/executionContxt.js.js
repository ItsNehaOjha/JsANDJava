// JavaScript is ⛔ single-threaded⛔, meaning it ⛔executes one command at a time⛔
// in a single call stack. This means that JS can only do one thing at a time—it does not run multiple
//  operations in parallel (like multi-threaded languages such as Java or C++).

// 📌 JavaScript  Execution Context and Its Types📌

// The Execution Context in JavaScript defines the environment in which code is 
// executed. It defines:

//1: What variables and functions are available at a given time.
//2: How JavaScript executes code (line by line).
//3: How scopes and this work.


// ⛔  Three Types of Execution Contexts

//🟡 1. Global Execution Context (GEC):
// Created when a JavaScript file runs.
// Stores global variables and functions.
// It is the default execution context (referred to as 'this' in browsers).

console.log(this);  // In browsers, `this` refers to `window`


// 🟡 2. Function Execution Context (FEC):
// Created whenever a function is called.
// Each function gets its own execution context.
// Has its own variable environment and 'this' value.

function greet() {
    let name = "Neha";
    console.log(name);  // "Neha"
}
greet();  // Creates a new execution context

// 🟡 3. Eval ececution context: not so imp, mostly is in mongoose documentation


// ⛔ 2 main Execution Context Phases

/*
Every execution context goes through two phases:

🔵1. Creation Phase (Memory Allocation)  || OR Memory creaation phase
JS scans the code before execution and:
Assigns undefined to variables (var).
Stores function definitions in memory.
Sets this and arguments object.
 jitne bhi var honge ya use hue h bas unke liye memory assign hoti h koi bhi execution jese
 +, -, multiply aesa kuch nhi hota is phase m

🔵2. Execution Phase (Code Runs)
JavaScript executes the code line by line.
Assigns values to variables and executes functions.

ab is phase me sare execution hote h

                            ****need to understand how a code execute ****
Eg.  for practice try to explain the execution process of following code explaining phases roles
 */
let val1 = 10;  // line 1
let val2 = 5;    // line 2
function addnum(num1, num2){    // line 3
    let total = num1 + num2;     // line 4
    return total;                // line 5
}
let result1 = addnum(val1,val2);   // line 6
let result2 = addnum(10, 2)      // line 7

/*

ab is code ke run hone pe following process hote h:
step 1-> sabse pehle global execution /global environment hota h
          sabse pehle koi bhi code run krna ho wo sapse pehle global execution se run hota h 
          aur isko sabse pehle 'this' ke ander allocate hota h

step 2->  Memory Creation Phase ->  sare variables ko iktha kiya jata h aur apne pas rakha 
                                    jata h with default values 
        from code ==>
            val1 , val2 = undefined
            addnum = function defination pura isme hi aata h 
            result1, result2 = undefined
    ---> first cycle

step 3-> Execution phase :
    line1     val1 <- 10
    line2     val2 <- 5
    line3    // no need to do anything for addnum since its definition is already given as it in
        //  the memory creation phase
    line6   result1 <-  "addnum" -> ek aur executional context banke tyar hota h jiske ander hoga:- 
                          new variable environment + execution thread 
                == jitni bar function call hota h utni bar "new executional context" banke tyar hota h 

                -- to ab is nye addnum ke liye bhi dubara memory phase aur fir execution phase bhi hoga
                -> memory phase-> 
                                val1 <- undefined 
                                val2 <- undesined 
                                total <- undefined 
                -> execution context->
                                num1 <- 10
                                num2  <- 5
                                total <- 15  which will be returned to parent(global) executional context 
                ---- after returning value this executional context will be deleted 
 So  line6  result1  <-  15   
    line7   result2  (again new executional context bna) 
                                jiske ander hoga:- 
                          new variable environment + execution thread 
                == jitni bar function call hota h utni bar "new executional context" banke tyar hota h 

                -- to ab is nye addnum ke liye bhi dubara memory phase aur fir execution phase bhi hoga
                -> memory phase-> 
                                num1 <- undefined 
                                num2 <- undesined 
                                total <- undefined 
                -> execution context->
                                num1 <- 10
                                num2  <- 2
                                total <- 12  which will be returned to parent(global) executional context 
                ---- after returning value this executional context will be deleted 
So line7   result2 <- 12
            
*/

// ⛔ Execution Stack (Call Stack)
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




