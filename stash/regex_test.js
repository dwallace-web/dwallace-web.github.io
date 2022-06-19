//Define the regex logic pattern. The pattern is used for pattern-matching "search-and-replace" functions on text.

//Testing presumes http://x.x.x.x:5500/dwallace-web/lakers_dashboard/index.html but can be used for other URLs when available

//get the page url details
let fullURL = window.location.href + " 1 2 3 4  5678910 " + " abcdefghijk "
let fullPath = window.location.pathname
let queryParam = window.location.search
let nullChars = " This is where null characters goes here \0 \0 \0. This is where null characters goes here \0 \0 \0."
let samplePara = "While thoughts can shape our words, words can also definitely shape our thoughts. Being positive is the best way to improve your life. Go for what you want without worrying about other people. Changing your outlook will keep your safe from the boogeyman"
let numberString = "100, 1000, 5000, 777, 1234, 12, 10, 1,4,5 or 10000?";


detailobj = {
    URL: fullURL,
    path: fullPath,
    query: queryParam,
    nullStuff: nullChars,
    paragraph: samplePara
}

let paragraph =

    console.table(detailobj)

//case incensitive match: find this if it exists
let regTestOne = /lakers/i;

//global match find any time this appears - returns any time the strings appears
let regTestTwo = /l/g;

//find the characters in the brackets
let regTestThree = /[aioue]/gi;

//find everything not in the bracket
let regTestFour = /[^aioue]/gi;

//return the string without numbers
let regTestFive = /[^0-9]/gi;

//find anything that's in the or statement
let regTestSix = /(a|i|o|e|u)/gi;

//find if the string contains a pattern
let regTestSeven = /lakers/;

//return the string with only numbers
let regTest8 = /[0-9]/gi;

// .match() will return an array

console.log(fullURL.match(regTestOne))
console.log(fullURL.match(regTestTwo))
console.log(fullURL.match(regTestThree))
console.log(fullURL.match(regTestFour))
console.log(fullURL.match(regTestFive))
console.log(fullURL.match(regTestSix))

// .test() will return true or false value
console.log(regTestSeven.test(fullURL))

console.log(fullURL.match(regTest8))

// START Testing Metacharacters

//find matches where . exists immediate in between two characters
let regTest9 = /a.e/g;
console.log(fullURL.match(regTest9))

//only return the word based characters (letters and numbers, removes special characters)
let regTest10 = /\w/g;
console.log(fullURL.match(regTest10));

//do not return the word based characters (removes letters and numbers, returns only special characters)
let regTest11 = /\W/g;
console.log(fullURL.match(regTest11));

//only return numbers
let regTest12 = /\d/g;
console.log(fullURL.match(regTest12));

//only return non-numbers
let regTest13 = /\D/g;
console.log(fullURL.match(regTest13));

//remove the spaces
let regTest14 = /\S/g;
console.log(fullURL.match(regTest14))

//find the index of the first null character
let regTest15 = /\0/;
console.log(detailobj.nullStuff.search(regTest15))

//find e's in astring.
let regTest16 = /e+/g;
console.log(samplePara.match(regTest16))

//find anything that cointains L
let regTest17 = /l0?/g;
console.log(samplePara.match(regTest17))

//find strings with h 
let regTest18 = /ho*/g;
console.log(samplePara.match(regTest18))

//find numbers that have 3 or 4 digits
let regTest19 = /\d{3,4}/g;
console.log(numberString.match(regTest19))

//find numbers that have 4 or more digits
let regTest20 = /\d{4,}/g;
console.log(numberString.match(regTest20))

//find numbers that have 3 digits
let regTest21 = /\d{3}/g;
console.log(numberString.match(regTest21))

//find a pattern in the middle of a string
let regTest22 = /lakers/
console.log(regTest22.test(fullURL))

//find any pattern in the middle of a string
let regTest23 = /dwallace-web\/(.*)\/index.html/
console.log(regTest23.test(fullURL))

//find any pattern in the middle of a string with a number - returns false
let regTest24 = /dwallace-web\/(\d*)\/index.html$/
console.log(regTest24.test(fullURL))

//find any pattern in the middle of a string with a number - returns true

let regTest24True = '/dwallace-web/12345/index.html'
let regTest25 = /dwallace-web\/(\d*)\/index.html$/
console.log(regTest25.test(regTest24True))



//personal challenge find any pattern that starts with ^, has an understore in the middle, and ends with another string
let challenge = 'my_string'

// let challengeTestA = /([a-z]+)_([a-z])/
// console.log(challengeTestA.test(challenge))

// let challenge1TestB = null;
// // console.log(challenge.match(challengeTestB))