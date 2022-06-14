//Example 1: generate cachebuster value with random number

let random //variable 

random = Math.round(Math.random() * 10000000000) //find a random number, multiply the random number, and round it to the nearest value

console.log("Random cachebuster value " + random) // display the random number in the browser console

//Example 2: generate a cachebuster value with date

let date = Date.now() //return the date and time
console.log("Date based cachebuster value " + date)

//Example 3: generate a value with the date and a random value; for advanced usecases only
function getRandom(date, random) {
    return cachebuster = `${date}${random}`;
};

console.log("new random: " + getRandom(date, random));