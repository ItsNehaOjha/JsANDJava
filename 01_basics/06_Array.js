// JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript array-copy operations create shallow copies

// SHALLOW COPY

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) 
// as those of the source object from which the copy was made.As a result, when you change either the source or the
//  copy, you may also cause the other object to change too.
const a= [0,1,2,3,4,true, "Neha"]

const arr = new Array(1,2,3,4,5,6);

//methods

arr.push(12);  //push an element in the last
console.log(arr);
arr.pop();     // pop the last element
console.log(arr);

// unshift is also used to put the element in the start so its a time consuming 
//shift is used to pop out the unshifted value of the start value

console.log(arr.includes(9)); // bollean type ans 
console.log(arr.indexOf(9));    // -1 mans not availeble

               // JOIN METHOD ///


const newArr = arr.join();;
console.log(arr);      //[ 1, 2, 3, 4, 5, 6 ]
console.log(typeof newArr);   // string

console.log(newArr);      //1,2,3,4,5,6


                        // SLICE AND SPLICE //

const myn1 = arr.slice(1,3) ;
console.log("range is not included in slice" ,myn1);  // [2,3]

const myn2 = arr.splice(1,3);
console.log("Range is included and manipulate the original array :-", "original array now is : ", arr, " and the rsult is : " , myn2);

//Range is included and manipulate the original array:- original array now is :  [ 1, 5, 6 ]  and the rsult is :  [ 2, 3, 4 ]


