const name = "Neha "
const degree = "Btech"
console.log(name + degree + "value"); // this method id not recommended 
//recommended method is : using *********STRING INTERPOLATION ************

console.log(`My name is ${name} and my degree is ${degree}`);


const gameName = new String("NEHA-Ojha")  // will be undefined inside the console and on taking the value of gameName output will be:
// 0:"N"
// 1:"E"
// 3:"H"
// 4:"A"
// with a length:4  prperty
// and many other properties as well == prototype 

// *********8diffrent prototypes of string*************
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('N'));

const substringFun = gameName.substring(0,8);    //no negative values 
console.log(substringFun);

const sliceFun = gameName.slice(-8,4);
console.log(sliceFun);  //EHA

const newStr = "      Neha Ojha     "
console.log(newStr);
console.log(newStr.trim());  //removes extra spaces 

const url= "https://neha.com/neha%ojha"
console.log(url.replace("%",""));

console.log(url.includes('neha'));  // include gives true or false


// want to convert string into array based on -

const strToArr = "neha-ojha-aman-sonkar";
console.log(strToArr.split('-'));  //[ 'neha', 'ojha', 'aman', 'sonkar' ]






