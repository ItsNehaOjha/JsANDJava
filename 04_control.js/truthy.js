const userEmail = []

//truthy value
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// ❗falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//❗ truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
//
//❗❗ for objects ---

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// ❗❗
false == 0   //true

false == '' // true

0 == ''  //true
// ❗❗


// ⛔ Nullish Coalescing Operator (??): null undefined  ⛔

let val1;
// val1 = 5 ?? 10       //5
// val1 = null ?? 10    //10   checks for safety to ignore null
// val1 = undefined ?? 15   //15 ignores undefined
val1 = null ?? 10 ?? 20     //10 first value is assigned

console.log(val1);



// ⛔ Terniary Operator ⛔

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")