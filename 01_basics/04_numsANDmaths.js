const num = 400;
console.log(num);

const balance = new Number(100);   
console.log(balance);   // [Number:100] : this will give some prototypes too of Numbers 

console.log(balance.toString());
console.log(typeof balance);  // string

//fayeda ye hog KI AB string ki properties bhi use kr skte h

console.log(balance.toString().length);   //3

console.log(balance.toFixed(2)); //100.00 // toFixed return a string with a number with a specified number of decimals

// ******************   PRECISION AND TO LOCAL STRING CONVERSION ********************

otherNum = 123.8966
console.log(otherNum.toPrecision(4));     // 123.9
//Number of significant digits. Must be in the range 1 - 21, inclusive.Returns a string containing a number represented 
//either in exponential or fixed-point notation with a specified number of digits.


const hundreds = 10000000000;
console.log(hundreds.toLocaleString('en-IN'));   //10,00,00,00,000

// *********************  MATHS *************************

//  maths comes by default with js
// Math is a function not a property 
console.log(Math.abs(-4));   // neg to pos

console.log(Math.round(4.6));  //5

console.log(Math.ceil(5.6));  //6

console.log(Math.floor(5.6));  //5

console.log((Math.random()*10 )+1);  //3.2771566280617916
console.log(Math.floor((Math.random()*10 ))+1);  //10    : +1  to avoid 0 case and include last digit too


// for number bet 10 and 20
let min = 10
let max = 20
console.log(Math.floor(Math.random()* (max - min + 1) + min)) //11, 12,14 etc


//  Q : kya Pi ki value change ho sakti hai JS mei
// ans is : PI me 
writable=false   // defined hota h :ess property ki wajha se overwrite possible nhi hai... ye to explicitly bhi use kr sakti h
// like name=nehe
// then name ki property mei writable=false krdo
// to fir pure program mei name ki value neha hi rhega

// integers iterable nhi hote kyuki unme iteration=false hota hai

// Math ke property hoti h : PI aur bhi bhut
// check krne ke liye console me Math likhenge to start me sare property uske bad sare methods aa jayenge






