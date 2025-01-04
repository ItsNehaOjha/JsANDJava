//// ********************** interview perspective ********************************


// JS is dynamically typed language because we dont need to define the type explicitly , they are defined during runtime
// typescript is dynamic typed

// two type of data types : 
// 1: primitive  == call by value 
// 2: non primitive  == call by address


// 1: Primitive  == (7) : string, Number, Boolean , Null, undefined, symbol(to make unique) , bigInt

const score = 100;
const scVal = 100.2

const isLogged = false;

const outTemperature = null
let UserEmail; // undefined 

//symbol  to make unique id's
const id = Symbol('123');
const anotherId = Symbol('123');  //retyrn type will be symbol

console.log(id === anotherId);  //false bcz both are unique

//BigInt
const bigNumber = 12345678953622

// 2: non Primitive:( Reference in memory is allocated ) : Array, Objects, Functions

const heros = ["neha ", "aman","namrata"];
// object is always inside curly braces 
let obj = {
    name: "Neha",
    age: 22,
}

//function as a variable 
const myFunction = function(){
    console.log("hello World ")
}
console.log(typeof outTemperature);  // object not null




//  ****************Memory ********************
//  two types of memory : 
// 1: stack (primitive)  ==  we get the copy of the variable we declared 
// 2: Heap memory (non primitive )   == we get the reference of the original variable we declared

let myYTName = "nehaOjha"
let newName = myYTName;
newName="Aman Sonkar"
console.log(myYTName); // original remain same due to stack
console.log(newName);

let obj1 = {
    oldName : "nO",
    email: "okas@gail.com"
}
let obj2 = obj1
obj2.email = "ojhaneha 00282gmail.com"
console.log(obj1.email);
console.log(obj2.email); // both will change as original data is changed in the heap


