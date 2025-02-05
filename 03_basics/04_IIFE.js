//Immediately Invoked Function Expression (IIFE)

// global scope ke pollution se problem hoti h kai bar usse backne ke liye IIFe ka use hota h 
// IIFE function ko immediately execute krwa deta h e.g. database connection

//normally

function chai(){
    console.log(`DB connected`);  
}
//chai() // here too function can be executed immediately but here global scope get polluted 

// so need IIFE : syntax have major two parenthesis: ()() :
// 1️⃣ () for the function declaration as ()can create a separate block of scope
// 2️⃣ () for calling the function 


// ✅ IIFE 


//named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

// but two write two IFE in the same need to notice ❗ must write ; (to end) in the end of the function to stop the contineous calling of first IIFE


//UNNAMED IIFE using Arrow Function

( ()=>{
    console.log(`DB CONNECTED`);
})();

// if want to give a variable inside thw function

( (name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
})("Neha")       //DB CONNECTED TWO Neha

