// JavaScript Date objects represent a single moment in time in a platform-independent format.
//  Date objects encapsulate an integral number that represents milliseconds since the midnight at the 
// beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date()
console.log(myDate); //2025-01-04T09:59:37.649Z

console.log(myDate.toString())  //Sat Jan 04 2025 10:00:13 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString())  //Sat Jan 04 2025

console.log(myDate.toISOString())    //2025-01-04T10:02:20.840Z

console.log(myDate.toLocaleString());  //1/4/2025, 10:03:01 AM
  
console.log(typeof myDate);   //object

//need to declare a specific date

let myCreatedDate = new Date(2025,0,23)  // months start from 0 
console.log(myCreatedDate.toDateString());   //Thu Jan 23 2025





