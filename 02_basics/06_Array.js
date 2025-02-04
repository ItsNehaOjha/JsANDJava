// JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript array-copy operations create shallow copies

// there is major diffrence between array of java and js: 
            //   Arrays in Java are statically typed, meaning you must declare the data type of the elements the array will hold when you create it. All elements in the array must be of the same type.
            // Arrays in JavaScript are dynamic and can hold elements of any data type. You can mix strings, numbers, objects, and even other arrays within the same array.
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
console.log(typeof newArr);   // string  (changes the type of arr into string through join)

console.log(newArr);      //1,2,3,4,5,6


                        // SLICE AND SPLICE //

const myn1 = arr.slice(1,3) ;
console.log("range is not included in slice" ,myn1);  // [2,3]

const myn2 = arr.splice(1,3);
console.log("Range is included and manipulate the original array :-", "original array now is : ", arr, " and the rsult is : " , myn2);

//Range is included and manipulate the original array:- original array now is :  [ 1, 5, 6 ]  and the rsult is :  [ 2, 3, 4 ]



// arrays take any type of data and append it or modify as needed for example inside one array another array will be added which is not a good practice :
const arr1=["1","neha","ojha"];
const arr2 = ["snaeha","aman"];
arr1.push(arr2);
console.log(arr1);    //[ '1', 'neha', 'ojha', [ 'snaeha', 'aman' ] ]   // here array have taken another array as a diffrent data

//except push we could use another methos for better output: 
                 // CONCAT  : COMBINES TWO OR MORE ARRAY AND GIVE A NEW ARRAY

const newArr1=["1","neha","ojha"];
const newArr2 = ["snaeha","aman"];
const newAr = newArr1.concat(newArr2);
console.log(newAr);             //[ '1', 'neha', 'ojha', 'snaeha', 'aman' ]

//one more method ==           SPREAD                     (used for adding more then two array easily)

const spreadArr1=["1","neha","ojha"];
const  spreadArr2= ["snaeha","aman"];
const spreadArr = [...spreadArr1, ...spreadArr2];
console.log(spreadArr);               //[ '1', 'neha', 'ojha', 'snaeha', 'aman' ]



//use of                    (   FLAT   )
//LETS say i have a situation with multidimensional array and I want to see that array properly then can use flat with depth like 1,2,3 or infinity to see how much division of array has occured

const multiDimArray= [1,2,3,[4,5,6,7], [ 7 , 8 , 9, [ 3 , 66, 88, [ 666, 888 , 333]]]];
const properArrayVisual = multiDimArray.flat(Infinity);
console.log(properArrayVisual);          
//output
/*
[
    1,   2,   3,   4, 5,  6,
    7,   7,   8,   9, 3, 66,
   88, 666, 888, 333
]
*/


//convert another data type to array  from [    array.from  ]

console.log(Array.isArray("Neha"));           //false
console.log(Array.from("NEHA"));               //[ 'N', 'E', 'H', 'A' ]


console.log(Array.from({name:"NEHA"}));        //OUTPUT: []  () here key value is given so could not be verified hence will give empty array)


//create from diffrent values into array    through : (Array.of)

let sc1 = 100
let sc2 = 300;
let sc3 = 400;

console.log(Array.of(sc1,sc2,sc3));         //[ 100, 300, 400 ]

