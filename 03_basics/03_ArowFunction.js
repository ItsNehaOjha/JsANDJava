// ----------this and arrow function------------

// ➡️ this means current context : 
const user={
    username : "Neha",
    age:23,

    welcomeMsg: function(){
        console.log(`${this.username} , welcome to website`); //here this refers the current context: current scope ke ander ka username 

    }
}
//user.welcomeMsg      // this will not give any output as its just declared without brackets

//user.welcomeMsg() // as its a method so need brackets to execute it:: o/p : Neha , welcome to website

/// if we will change the value of username then too the o/p will be accordingly executed


user.username = "Sam"
//user.welcomeMsg()     // Sam , welcome to website (because in the function we have not hardcoded the value , we said that whatever the context is just behave accordidly through this keyword)


//   -- ⭐ note important about (this) ⭐


const mainUseOfThis={
    username : "Neha",
    age:23,

    welcomeMsg: function(){
        console.log(`${this.username} , welcome to website`); //here this refers the current context of object: current scope ke ander ka username 
        console.log(this);   //🔴 🔴 🔴 🔴 
        
    }
}

// mainUseOfThis.welcomeMsg()
// mainUseOfThis.username = "Aman"
// mainUseOfThis.welcomeMsg()

/* output: tis gives the current context(variables) of the functions changed accordingly
Neha , welcome to website
{ username: 'Neha', age: 23, welcomeMsg: [Function: welcomeMsg] }
Aman , welcome to website
{ username: 'Aman', age: 23, welcomeMsg: [Function: welcomeMsg] }
*/

//❗❗❗❗❗

//console.log(this);      //{}  

// ❗❗❗❗
// here in the terminal using node the current contet is {} but
// in the console of website after inspect the current context is about the window
//because the browser have a global object of window having diffrent events  


//this does not work the same insde function as it does in object 

function chai(){
    console.log(this);
    
}

//chai()   // here due to this many things will be the output lie performance , object etc

function chaiCode(){
    let username = "Neha"
    console.log(this.username); //o/p:  undefined
    
}
//chaiCode()  //this is not be able to used inside the function it can only be sed in objcets to refer the current context


//                 ✅✅✅🎯 Now about arror function 🎯✅✅✅  () => {}


const chaiArrow = () => {
    let username = "Neha"
    console.log(this.username);  // undefined only 
}

const chaiArrow2 = () => {
    let username = "Neha"
    console.log(this);  // {}
}

//Arrow function :❌ Does not have its own this (inherits from surrounding scope).
//normal function: ✅Has its own this (determined by how the function is called).

//AF:-> : arguments Object ❌ Not available (Use rest parameter ...args instead).
//NF : arguments Object ✅ Available (contains function arguments).

//AF: 	❌ Not hoisted (Must be defined before use).
//NF: ✅ Hoisted (Can be called before declaration).

//AF: 💡Best for: Short, single-expression functions, callbacks, map(), filter(), etc.
//NF: 💡Best for: Methods, constructors, and when this is needed.



//basic arror function : Explicit return : based on return keyword

const addTwoNum = (num1, num2) =>{
    return num1 +num2
}
//console.log(addTwoNum(4,6))

//implicit return AF

// const addTwoNumIR = (num1, num2) => num1 +num2

// or: 📝  curly braces likhne per return keyword likhna pdta h nhi to nhi 📝 

// const addTwoNumIR = (num1, num2) => (num1 +num2)

// console.log(addTwoNumIR(4,5))  //9

// use of paranthesis : is in objects 

//const addTwoNumIR = (num1, num2) => {username:"Neha"}  // this will give undefined as object have curly braces so can't have implicit return

// solutio of this is: use parenthesis so to  not use return keyword

 const addTwoNumIR = (num1, num2) => ({username: "Neha"})