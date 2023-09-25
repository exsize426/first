"use strict"
// let user = {
//   name: 'John',
//   age: 30,
//   wife: null,
//   work: "unworking"

// };
// let str = "name age wife work";

// function topSalary(salaries){
//   let start = 0;
//   let maxName = null;
//   for( const [key,value] of Object.entries(salaries)){
//     if(value > start){
//       start = value;
//       maxName = key;
//     }
    
//   }
// return start;
// }


// function say () {
// let age = 35;
//     return function (){
      
//       return age++;
//     };
  
// }
// let resault = say();
// console.log(resault)

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
 function byField(users){

  return (a,b) => a[users] > b[users]? 1: -1; 
    }

  
 




 users.sort(byField(users))