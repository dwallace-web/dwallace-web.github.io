// open the console
//press control + shift + j in Windows
//command + option + j on a Mac. 
console.log("press control + shift + j in Windows OR command + option + j on a Mac. ")


// sample console methods

console.error("This is a error");
console.warn("This is a warning");

// generate a table the hard way from an array
console.table([{ item: "iPhone", cost: "$1000" }, { item: "Mac", cost: "$2000" }])

//Generate a table from a object with a property property of objects

let productLine = {};

function Product(item, cost) {
    this.item = item
    this.cost = cost
}

productLine.Phone = new Product("iPhone", 1000)
productLine.Computer = new Product("Mac", 2000)
productLine.Wearable = new Product("AirPods", 100)

//generate table from obj
console.table(productLine)