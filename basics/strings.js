const name = "bhavika"
const repoCount = 24

//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}.`); //this is the most efficient way to write string for projects in js

const gameNew = new String('bhavika_s')

console.log(gameNew[0]);
console.log(gameNew.__proto__);


console.log(gameNew.length);
console.log(gameNew.toUpperCase());
console.log(gameNew.charAt(2));
console.log(gameNew.indexOf('k'));

const newString = gameNew.substring(0,4)
console.log(newString);         

const anotherString = gameNew.slice(-8,4)
console.log(anotherString);

const newStringOne = "   bhavika   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bhavi.com/bhavika%24sehgal"

console.log(url.replace('%24', '_06'));

console.log(url.includes('utku'));

console.log(gameNew.split('_'));