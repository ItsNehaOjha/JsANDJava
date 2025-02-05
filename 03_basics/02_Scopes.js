

//{}  -- scope of program 

var c= 300
c = 60
//--  any way c will not print bcs if block is imported already with c variable
if(true){
    let a = 10
    const b = 20
    var c = 30    // or even just written c= 30 both will do same issue 

}

//console.log(a);     // error
//console.log(b);     //error
//console.log(c);     //  30 (that is why var is not used it does not follow the scope) 


//nested scope 

function one(){
    const username = "Neha"

    function two(){
        const website = "portfolio"
        console.log(username);
        
    }
    //console.log(website);   // cause error as website is local scope variable of function two
    two()        // this is also related to closure 

    //  closure 
/*    a closure gives a function access to its outer scope. 
    In JavaScript, closures are created every time a function is created,
    at function creation time.
    Functions in JavaScript form closures. A closure is the combination of a 
    function and the lexical environment within which that function was declared. 
    This environment consists of any variables that were in-scope at the time 
    the closure was created.
*/
}
//  one()   //Neha

//ONE MORE METHOD TO CREATE FUNCTIONS AS A EXPRESSION

//normal way
function addOne(num){
    return num +1
}
addOne(4)

//expreesion methos :-

const addTwo = function(num){
    return num+2
}
addTwo(5)

// ----------------------HOISTING ----------------------


console.log(addOneH(4))  // this will not give error and give o/p = 5

//Function declarations here are hoisted entirely.

function addOneH(num){
    return num +1
}

//expreesion methos :-

addTwoH(5)    // ❌ ReferenceError: Cannot access 'addTwoH' before initialization


const addTwoH = function(num){  //Only the variable addTwoH is hoisted, not the function itself.
    return num+2
}
//At the time addTwoH(5) is executed, addTwoH is still uninitialized.

//                      note :- 
/*

Function Expression (const or let): 🚫 Only variable hoisted, not the function: Can not be used before declaration?

*/

