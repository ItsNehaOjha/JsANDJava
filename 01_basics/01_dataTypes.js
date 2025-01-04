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


// ********************* operations ***************************

let st1 ="hello"
let st2 = "Neha"
let st3 = st+st2;
console.log(st3);   // hello Neha

console.log("1" + 2);  //12
console.log(1 + "2");  //12 

console.log("1" + 2 +2);  //122

console.log(2 + 2 + "1");  //41

console.log(+true); //1
console.log(+"");  //0

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


//  ********************** comparison *****************************

console.log("2" == 2); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true


console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false


//  strict checking ===  checks the datatypes too 

console.log("2" === 2); //false     must do strct comparison and does not prefer ==







