const paragraph = document.getElementById('myparagraph');
const button = document.getElementById('mybutton')

button.addEventListener('click', function(){

    paragraph.textContent = "This is the new content from JavaScript"
})

const D = document.getElementById('myDiv')
//const P = document.querySelector('.myP')

//const createSomething = document.createElement('p')
//createSomething.textContent = "I was created by my creator"
//D.appendChild(createSomething)


paragraph.classList.add('.highlights')
//paragraph.classList.remove('.highlights')

// Change content, modifies structure
// change styling
// Add or Remove Elements
// Respond to event (click e.t.c)
// Access Element (getElement)

const elvisnetworth = 300000000;
const idrisnetworth = 10000000

if (elvisnetworth == idrisnetworth){

    console.log("Elvis and Idris are both rich")
}else {

    console.log("Elvis is richer than Idris")
}


elvisnetworth == idrisnetworth ? console.log("Elvis and Idris are both rich") : console.log("Elvis is richer than Idris")




let num = 400.345574

console.log(num.toFixed(2))
console.log(Number.isInteger(num))
console.log(Math.floor(num))
console.log(Math.max(100, 300, 700))

// GLOBAL VARIABLE

let x = 500
let y = 600

// Arithmetic Operators
/*let z = x + y
let z = y - x
let z = y * x
let z = y / x*/

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

y > x ? console.log('true') : console.log('false')

// Comparison Operators
console.log(x > y)
console.log(x < y)
console.log(x === y)

// Logical Operators
console.log(x && y)
console.log(x || y)

// Assignment Operators
console.log(x = 200)
console.log(x += y)
console.log(x -= y)

// Unary Operators
console.log(++y)
console.log(--x)

// Tinary Operators
let result = (x > y) ? "X is greater" : "Y is greater"
console.log(result)

// Control Flow

let A = 500
let B = 600

// IF ELSE
if (A > B){
        console.log("X is greater")
}else {

    console.log("Y is greater")
}

// IF, ELSE IF, ELSE
let Michealage = 100

if (Michealage < 50){

    console.log("Your'e still satisfied for the pension")
}else if (Michealage >= 18 && Michealage < 65){

    console.log("Sorry! come sack your'e older")
}else {

    console.log("Come around for your money! congratulations")
}

let Johnage = 100

if (Johnage < 50){

    console.log("Your'e still satisfied for the pension")
}else if (Johnage >= 18 && Michealage < 65){

    console.log("Sorry! come sack your'e older")
}else if (Johnage > 65){

    console.log("Your'e qualified")
}else{

    console.log("Please specify your age")
}

// LOOP FOR

for (let healthrecords = 0; healthrecords < 50; healthrecords++) {
    console.log(healthrecords);
}

const Billionaires = ["Elvis", "Yahya", "Funmi", "Micheal", "Comfort", "Abimbola"]

for ( const richpeople of Billionaires ){

    console.log("Richperson" + richpeople)
}



// ARRAYS
 
//push
let oldclassname = ["Elvis", "Abimbola", "Micheal", "Samuel", "Wealth", "Funmi"]
/*oldclassname.push("Funmi")
console.log(oldclassname)*/

/*oldclassname.push("Obinna")
console.log(oldclassname)*/

//pop
/*oldclassname.pop("Funmi")
console.log(oldclassname)*/

//splice
/*oldclassname.splice(1, 1, "John", "Moses")
console.log(oldclassname)*/

oldclassname.splice(2,2)
console.log(oldclassname)

//concat
let Nigerians = [
    "Elvis", "Abimbola", "Micheal", 
    "Samuel", "Wealth", "Funmi"
]

let Canadians = [
    "Ayobami", "Idris", "Funmi"
] 

const newNation = Nigerians.concat(Canadians)
console.log(newNation)

//map
let Numbers = [1,2,3,4,5,6,7,8,9,10]

let squareNumber = Numbers.map(num => num * num)

console.log(squareNumber)

//slice
let Fruits = ["Apple", "Banana", "Orange"]
const newportion = Fruits.slice(0,1)
console.log(newportion)

let statement = "I am occupied"
const newst = statement.slice(1, 6)
console.log(newst)

let fruits = ["banana", "orange", "apple"]
const newfruit = fruits.sort()
console.log(newfruit)


function addition(a,b){

    let c = a + b

    return c
}

console.log(addition(50,50))

function subtraction(a,b){

    let c = a - b

    return c
}

console.log(subtraction(1000,300))

const multiplication = (a,b) =>{
    let c = a * b

    return c
}
console.log(multiplication(700,500))












/*document.addEventListener('DOMContentLoaded', function(){
    alert("Welcome to HealthPick")
}) */

// String
// numbers
// int
// boolean
// objects
// arrays


// How are you this morning
// How are you this afternoon
// How are you this evening


/*let greetings = "How are you this morning"*/
/*const greetings_default = "Hi, Welcome back!"*/

/*console.log(greetings)
console.log(greetings_default)*/

/*let x = 500
let y = 900
const total = x + y

console.log("The total is" + total)*/

/*let class1 = 500
let class2 = 1000

if (class1 > class2){

    console.log("class1 is greater than class2")
}else{

    console.log("class1 is not greater than class2")
}*/

/*let class1 = false
let class2 = true

if (class1 == false){

    console.log("class1 is false")
}else{

    console.log("class is not false")
}*/

/*let class1 = true
let class2 = true

if (class1 == false){

    console.log("class1 is false")
}else{

    console.log("class1 is not false")
}*/

/*SUV1 = {
    
    name:"Tesla",
    color:"black",
    model:"vlg",
    price:"1Trillion",
    weight:"650kg" 
}

SUV2 = {
    
    name:"Toyota",
    color:"white",
    model:"T2024",
    price:"100,000,000,000",
    weight:"450kg" 
}

console.log(SUV1)

console.log(SUV2)

console.log(SUV1.name)
console.log(SUV2.price)*/

/*let score = prompt("Enter your score:")
if (score < 0 | score > 100){
    console.log("Score should fall between 0 and 100");
}

let student1 = {
    name:"Mark John",
    course:"Economics",
    level:"200 Level",
    school:"Unilag"
}

console.log("Student1 level is " +student1.level)
console.log("Student1 school is " +student1.school)*/

// Arrays- Collection of similar data all stored in one variable

// ARRAY OF FRUITS

/*const bucket = ("Orange", "Apple", "Bananas", "Coconut" "Cucumber")*/


// ARRAY OF SUV
/*let SUV = [
    {
        name:"Tesla",
        color:"black",
        model:"vlg",
        price: 300000000000,
        weight:"650kg"  
    },

    {
        name:"Toyota",
        color:"white",
        model:"T2024",
        price: 100000000000,
        weight:"450kg"
    },

    {
        name:"BMW",
        color:"red",
        model:"Bmt59",
        price: 400000000000,
        weight:"250kg"
    }

]

console.log(SUV)*/



// ARRAY OF NUMBERS

/*const randomNumber_arrays = [3456, 7834, 89000, 4634638]*/


// STRINGS METHODS

/*const Denominations = "eight hundred thousand pounds"
const Denominations2 = "NINE HUNDRED THOUSAND POUNDS"

console.log(Denominations.length)
console.log(Denominations.length)
console.log(Denominations.toUpperCase());
console.log(Denominations2.toLowerCase());
console.log(Denominations.indexOf('e'))
console.log(Denominations.lastIndexOf('h'))
console.log(Denominations.substring(0, 15))
console.log(Denominations.slice(-5))
console.log(Denominations.replace("eight", "Ten"))*/





// This is an object
/*const person = {

    name: "Elvis",
    netWorth: 15000000,
    speech: function(sp){

    }
}



function speech (){

    console.log("This is a standalone function")
}*/

/*console.log(person.speech())
console.log(speech())

console.log(person.speech("I talk loud"))*/



// DOM MANIPULATION

/*getElementById
getElementsByClassName
querySelector*/