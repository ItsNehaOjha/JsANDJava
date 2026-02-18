
//  * ================================================================
//  *  ADVANCED ARRAY METHODS (forEach, filter, map, reduce)
//  *  Hinglish Commented Notes + Code Examples
//  *  Read top-to-bottom and run step-by-step in Node/Browser Console
//  * ================================================================



/* ================================================================
   1) forEach()  --> ITERATION ONLY (NO RETURNED ARRAY)
   ================================================================

   - forEach ka use tab karte ho jab tumhe bas array ke har element
     par koi kaam perform karna ho (like print, side-effect).
   - Yeh NAYA ARRAY RETURN NAHI karta.
   - Isliye transformation ya filtering ke liye USELESS hai.
*/

const nums = [1, 2, 3, 4, 5];

const resultForEach = nums.forEach((num) => {
  return num * 2;   // ❌ Yeh return ignore ho jayega
});

console.log("forEach result:", resultForEach);
// Output: undefined

// Interview Pitfall:
// "forEach se new array mil jayega" --> GALAT.
// forEach ALWAYS undefined return karta hai.


/* ================================================================
   2) filter()  --> CONDITION BASED SELECTION
   ================================================================

   - filter ek NAYA ARRAY return karta hai.
   - Sirf wahi elements rakhta hai jo condition TRUE karte hain.
*/

const numbers = [2, 5, 8, 12, 1, 20];

const greaterThan5 = numbers.filter((num) => {
  return num > 5;   // condition TRUE hui to include hoga
});

console.log("Filtered (>5):", greaterThan5);
// Output: [8, 12, 20]


// Common Beginner Mistake:

const wrongFilter = numbers.filter((num) => {
  num > 5;  // ❌ return hi nahi kiya
});

console.log("Wrong Filter:", wrongFilter);
// Output: []  (kyuki undefined => false treat hota hai)


// Implicit return (no curly braces):

const correctFilter = numbers.filter(num => num > 5);
console.log("Correct Filter:", correctFilter);


/* ================================================================
   REAL-LIFE EXAMPLE (OBJECT ARRAY FILTERING)
   ================================================================
*/

const books = [
  { title: "Book A", genre: "History", publish: 1995 },
  { title: "Book B", genre: "Science", publish: 2005 },
  { title: "Book C", genre: "History", publish: 2015 },
  { title: "Book D", genre: "Math", publish: 2020 }
];

// History genre AND publish after 2000

const historyRecent = books.filter(book => 
  book.genre === "History" && book.publish > 2000
);

console.log("History & Recent:", historyRecent);


/* ================================================================
   3) map()  --> TRANSFORMATION
   ================================================================

   - map bhi NAYA ARRAY return karta hai.
   - Har element ko modify karke new value deta hai.
*/

const arr = [10, 20, 30];

const addTen = arr.map(num => num + 10);
console.log("Add 10:", addTen);
// Output: [20, 30, 40]


// Object Transformation:

const updatedBooks = books.map(book => {
  return {
    ...book,
    publish: book.publish + 1
  };
});

console.log("Updated Books:", updatedBooks);


// Pitfall:

const wrongMap = arr.map(num => {
  num + 10;  // ❌ return missing
});

console.log("Wrong Map:", wrongMap);
// Output: [undefined, undefined, undefined]


/* ================================================================
   4) CHAINING (map + filter)
   ================================================================

   - Ek method ka output next method ka input ban jata hai.
   - Powerful pipeline bana sakte ho.
*/

const chained = [1, 2, 3, 4, 5]
  .map(num => num * 10)    // [10, 20, 30, 40, 50]
  .map(num => num + 1)     // [11, 21, 31, 41, 51]
  .filter(num => num > 40); // [41, 51]

console.log("Chained Result:", chained);


/* ================================================================
   5) reduce()  --> SINGLE VALUE ME CONVERT
   ================================================================

   Syntax:

   array.reduce((accumulator, currentValue) => {
      return updatedAccumulator;
   }, initialValue);
*/

const nums2 = [1, 2, 3, 4];

const sum = nums2.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("Sum:", sum);
// Steps:
// acc=0 +1 =>1
// acc=1 +2 =>3
// acc=3 +3 =>6
// acc=6 +4 =>10


/* ================================================================
   PRACTICAL EXAMPLE: SHOPPING CART TOTAL
   ================================================================
*/

const cart = [
  { item: "Shirt", price: 500 },
  { item: "Shoes", price: 1500 },
  { item: "Watch", price: 2500 }
];

const totalPrice = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log("Total Price:", totalPrice);
// Output: 4500


/* ================================================================
   INTERVIEW TRAPS
   ================================================================

   1) reduce me initialValue na diya to:
      - acc = first element ho jata hai
      - iteration 2nd element se start hoti hai

   2) map vs forEach confusion:
      - map RETURNS new array
      - forEach DOES NOT

   3) filter condition TRUE/FALSE honi chahiye
      - undefined => false treat hota hai

   4) reduce har case me sum nahi hota
      - array -> object bhi bana sakte ho

*/


/* ================================================================
   BONUS: reduce se object banana
   ================================================================
*/

const users = ["Neha", "Riya", "Aman"];

const userObj = users.reduce((acc, name, index) => {
  acc[index] = name;
  return acc;
}, {});

console.log("User Object:", userObj);


/**
 * END OF FILE
 * Run in Node:  node filename.js
 */

