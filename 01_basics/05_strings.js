//05_strings.js
const names =  "suresh"
const repocount = 50

// console.log(names  +  repocount + " value");

// console.log(`hello my name is ${names} and my repo count is ${repocount}`);


//https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-string-type


// all string method type https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length


const gameName = new String("sureshsb")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

const newstring = gameName.substring( 0,4)
console.log(newstring);

const anotherstring = gameName.slice(-8, 4)
console.log(anotherstring);

const nwstringone = "    suresh     "
console.log(nwstringone);
console.log(nwstringone.trim());

const url = "www.https//suresh%20bugaliya.website/suresh%20bugaliya%20career"

console.log(url.replaceAll('%20','-'));
