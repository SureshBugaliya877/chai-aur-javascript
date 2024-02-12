//primitive 

// 7 types : strring , number , boolean , null , undefind , symbol , bigint

let name = "suresh"
let number = 9610238230 
let isloggedin = false 
let sallry = null 
let time;
// const id = symbol('123')
// const anotherid = symbol('123')

// console.log(id === anotherid);

//const bignumber = 644654654654846468494n


// Reference (non primitive)

// array , objects , functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//*********************************************************************** */

// stack (primitive)      // heap (Non primitive)

let myyotubename = "sureshbugaliya"

let otheryotubename = myyotubename

otheryotubename = "bugaliya087"

// console.log(myyotubename);
// console.log(otheryotubename);


let userOne = {
    username : "suresh",
    userupi : "suresh@ybl"
}

let usertwo = userOne;

usertwo.username = "aashish";

console.log(userOne);
console.log(usertwo);

