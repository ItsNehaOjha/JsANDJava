//many lines of code is closed in a package called function 

function addTwoNumbers(n1, n2){
    console.log(n1+n2)
}
addTwoNumbers(3,5)       // o/p is 8      
// Notes:
//  n1 and n2 are parameter : and 3 and 4 during the call are argument
// here the data type is not defined so if given : 3,"a" then o/p is 3a 
// also we have given console inside the function so notice the diffrence 


//const res = addTwoNumbers(5,6)         // 11
//console.log(res);                     // undefined   (this is because nothing is returned by the function)

function addTwoNumbers(n1, n2){

    // any variable declared here have local scope 

    return n1+n2
    //now unreachable code
}

// variable declared here have global scope 

const res = addTwoNumbers(3,5) 
//console.log(res);       // 8

function loggedIn(username){
    return `${username} just logged in`
}
// console.log(loggedIn("Neha"))
// console.log(loggedIn())              // undefined just logged in


//          rest operator same like spread operator in functions to
//                  give multiple values in function

//suppose we have a situation where we dont know how many numbers will bebgiven as input then we can use 
// restoperator just like the spread operator of array 

function shoppingCart(...num1){      // here ... are use to create rest
    return num1
}
//console.log(shoppingCart(200, 300, 400));      //[ 200, 300, 400 ]



function shoppingCart(val1, val2, ...num1){      // here ... are use to create rest
    return num1
}
//console.log(shoppingCart(200, 300, 400,2000,5000));    //[ 400, 2000, 5000 ]:  

//this is bcz val1 have taken 200 and val2 = 300 ,left numbers are returned into num




//objects in function

const user = {
    username:"Neha",
    age:223
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
    
}
//handleObject(user);           //Username is Neha and age is 223

//(No need to compulsory create an object first and only then pass it , can also create an object during function call)
/*
handleObject({
    username:"Sam",
    age:23
})                  //Username is Sam and age is 23  
*/

// can also pass array 

const myNewArray = [200, 300 ,400]
function returnSecondValue(getArray){        // same as object pass getArray for general calling from any array or object not only the one we have created 
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));     //300
//console.log(returnSecondValue([200, 400, 600]));        //400

