// Use const whenever possible to enforce immutability and prevent accidental reassignments.Scope: Block-scoped, same as let
// Use let when you need to reassign the value of a variable within its scope.
// 
// data types ---------
// 1:null => (type = object) standalone value a diff type eg temp = 0 will be wrong , but temp = null means vlaue is empty right now
// 2:undefined => (type = undefined) just not defined
// 3:symbol = unique
// 4:object 

// ECMA= standards of js: 

// confusions on data types conversions

let age = 33
console.log(typeof age);  //number

let str = "33abc"
console.log(typeof str); //string

let stringInNumber = Number(str);  //class Number when in capital and guarentee to convert in Number: not reliable
console.log(typeof stringInNumber);//number 
console.log(stringInNumber);  //NaN not a number

//null
let score = null;
console.log(typeof score)  //oject
console.log(score) //0
let nullInNumber = Number(score);
console.log(nullInNumber); //0

//undefined
let score1 = undefined;
console.log(typeof score1)  //undefined
console.log(score1) //undefined
let undefinedInNumber = Number(score1);
console.log(undefinedInNumber); //0

//string
let str1 = "Neha";
console.log(typeof str1)  //undefined
console.log(str1) //undefined
let strInNum = Number(str1);
console.log(strInNum); //NaN



// "33"=>33
// "33abs" =>NaN
