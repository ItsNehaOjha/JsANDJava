//need to know about SINGLETON
//Object.create
//creation using object.create of any object is called creation of object through constructor and this have the singleton value


/*
The Object type represents one of JavaScript's data types.
 It is used to store various keyed collections and more complex entities. 
 Objects can be created using the Object() constructor or the object initializer / literal syntax.
 */

//object literals 

const js = {}  // creation

//key value pair : 

const jsUser = {
    name:"Neha",
    "full Name":"Neha Ojha",
    age : 23,
    location: "Jaipur",
    email: "ojhaneha0028@gmail.com",
    isLoggedIn: false,
    lastLoginDat: ["Monady", " Sunday"]
}

//access by two methods"
//1st method:  using dot operator

//console.log(jsUser.name);   // output: Neha   but through this method can not access full Name 

//2nd method:  to access full name need square bracket 

//console.log(jsUser["full Name"]);    // Neha Ojha 
//console.log(jsUser["name"]);  //neha
//console.log(jsUser[age]);  //age is not defined error " need brackets for age : "age" 




// therer is one primitive data type SYMBOLS in js which can be inserted inside the object as keys and print it:(asked in interviews )


//Question is to declare a symbol and then insert it in object as key and then print it : the type mst be SYMBOL 


//decalering symbol
const mySym = Symbol("key0");
const mySym2 = Symbol("storing the symbol as a value ");
// to use this symbol inside object need to use square brackets

const symbolObject = {
    mySym:"incorrectSymBolUseWithoutTheDataTypeOfSymbol",
    [mySym2]:mySym2
}


//console.log((symbolObject.mySym));    //incorrectSymBolUseWithoutTheDataTypeOfSymbol
//console.log((symbolObject[mySym2]));   //Symbol(storing the symbol as a value )


//console.log(typeof(symbolObject.mySym));    // string not Symbol 
//console.log(typeof symbolObject[mySym2]);      // symbol


// to modify values in object : modify email in the jsuser: 

jsUser.email ="nehaChatGpt.com";

// now If I want to freeze this proprty and don't want to change furthur: 

// Object.freeze(jsUser)

jsUser.email ="microsoft.com";

//console.log(jsUser)

/*
{
  name: 'Neha',
  'full Name': 'Neha Ojha',
  age: 23,
  location: 'Jaipur',
  email: 'nehaChatGpt.com',
  isLoggedIn: false,
  lastLoginDat: [ 'Monady', ' Sunday' ]
}
*/


//functions insertion in object
jsUser.greeting = function(){
    console.log("heloooo");
}

jsUser.greetingTwo = function(){
    console.log(`heloooo Js User ${this.name}`);     //this is used to refer to the same object's prperties
}

//console.log(jsUser.greeting);   //[Function (anonymous)]
//console.log(jsUser.greeting());   //heloooo
/* //
TypeError: jsUser.greeting is not a function
    at Object.<anonymous>    this is because have freezed the jsUser object now nfreeze it
*/

//console.log(jsUser.greetingTwo());  //heloooo Js User Neha





//              SINGLETON: declaring object using object constructors: 

const t1 = new Object()

//console.log(t1);    //{}  : this is a singleton object 

const t2 = {}

//console.log(t1);    // {}  this is non singleton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Neha"
tinderUser.isLoggedIn = false

//console.log(tinderUser);     //{ id: '123abc', name: 'Neha', isLoggedIn: false }

//objects ke ander objects

const regularUser = {
    email:"some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Neha",
            lastName: "Ojha"
        }
    }
}
//console.log(regularUser.fullName);  //{ userFullName: { firstName: 'Neha', lastName: 'Ojha' } }
//console.log(regularUser.fullName.userFullName);   //{ firstName: 'Neha', lastName: 'Ojha' }


// combine objects

const obj1 = {"1":"a", "2":"b"};
const obj2 = {"1":"a", "2":"b"};

//const obj3 = {obj1 , obj2}
//console.log(obj3);      //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }

//const obj3 = Object.assign({}, obj1, obj2)              
//console.log(obj3);         //{ '1': 'a', '2': 'b' }

const obj3 = {...obj1, ...obj2}
//console.log(obj3);     // { '1': 'a', '2': 'b' }


//                    ARRAY OF OBJECTS

const user = [
    {
        name:"Neha",
        new:"OJHA"
    },
    {
        "2":"Neha",
        "new":"OJHA"
    },
    {
        "3":"Neha",
        "new":"OJHA"
    }
]
//console.log(user[0].name);    //Neha    only for first object in secong key are declared with "" which will give undefined answer


// suppose I want to get the list of all keys of an object :  then that will be given inside an array

//console.log(Object.keys(tinderUser));           //[ 'id', 'name', 'isLoggedIn' ]

//console.log(Object.values(tinderUser));            //[ '123abc', 'Neha', false ]

//console.log(Object.entries(tinderUser));   // [ [ 'id', '123abc' ], [ 'name', 'Neha' ], [ 'isLoggedIn', false ] ]


//console.log(tinderUser.hasOwnProperty('isLoggedIn'));         //true




                      // destructring of object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Neha"
}

// normal way is: course.coursename to access else:
/// another way is through which don't need to write course. course. everytime

const {courseInstructor:inst} = course                  // this is destructuring done in curly braces

//console.log(inst);                //Neha




//API :  "apna kam kisi aur ko de dena"     khin aur webste se json format me data aata h  {}

 //json format ya to object ho skta h ya array format bhi jisme bhut sare objects hon
 
/*
json and object me diffrence h ki object ka pehle hi ek nam hota h magar json ka nhi hota h aur object me
keys  quates ke ander nahi hote h  json me quates ke ander hote h 
*/
