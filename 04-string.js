
// Find Length of String
var greet = "Good Morning";
console.log("Given String is :",greet,"and it's length is :",greet.length);

//ES6-String Template
// ${} - Varaiable substitution 

// Another Method, We use back tick instead of ""
console.log(`Given String is : ${greet},and it's length is : ${greet.length}`);


// charAt (0)
var charAtIndex0 = greet.charAt(0);
console.log(`Chracter at index 0 is  :${charAtIndex0}`);

// charAt (0)
var charAtIndex0 = greet.charAt(7);
console.log(`Chracter at index 7 is  :${charAtIndex0}`);

// charAt (lenth-1)
var charAtLastIndex = greet.charAt(greet.length-1);
console.log(`Last Index is :${charAtLastIndex}`);

var greet = "Good Morning";
console.log(`Index of M is :${greet.indexOf("M")}`);

//Concatination
var firstName = "Dhanshri";
var lastName = "Siddh";
var concatResult = firstName.concat(lastName);
console.log(`Concat result :$concatResult`);

//Split 
var greet = "Good Morning";
var result = greet.split(" ")
console.log(result);

//Total Number of string 
console.log("======= Write a count the total number of words from the given string =========");

var sentence = "Hello,How are you";
var result = sentence.split(" ");
console.log(result.length);

console.log("======================= toUpperCase() ========================");
var greet = "good morning";
var result = greet.toUpperCase();
console.log(result);


console.log("===================== toLowerCase() =========================");
var greet = "dHanshRI";
var result = greet.toLowerCase();
console.log(result);

console.log("===================== toLowerCase() =========================");
var city = "     Pune     ";
console.log(`Total Length ${city.length}`);
var result = city.trim();
console.log(`city : ${result},and it's length is :${result.length}`);

console.log("===================== includes() =========================");
var myLove = "I Love Only JavaScript";
var result = myLove.includes("Only");
console.log(`Given string :${myLove} and includes word only -${result}`);

console.log("===================== Search() =========================");
var myLove = "I Love Only JavaScript";
var result = myLove.search("Only");
console.log(`Given string :${myLove} and search word only -${result}`);

console.log("===================== slice() =========================");
var myLove = "I Love Only JavaScript";
var result = myLove.slice(2,6);
console.log(result);










