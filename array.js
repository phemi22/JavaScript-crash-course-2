// Ice Cream Word Problem
function iceCreamOrder(customerName, ...flavorsOrdered){
    const oneScoopPrice = 500
    const iceCreamtotalPrice = oneScoopPrice * flavorsOrdered.length

    console.log(`A customer with the Name ${customerName} has placed an order with the following flavors ${flavorsOrdered}. The total amount for this order is ${iceCreamtotalPrice}`)
}

iceCreamOrder("Elizabeth", "vanilla")




// Object literals
const person = {
    name : "Ayomide",
    country : "Kenya",
    age : 120
}

//Dot notation
let personName = person.name
console.log(personName)

// Bracket notation
let country = person["country"]
console.log(country)

// Add and Update properties
person.occupation = "Software Engineer"
console.log(person)

person.country = "Nigeria"
console.log(person)

// Delete Properties from an Object
delete person.occupation
console.log(person)



// Methods in an object literal
const newPerson = {
    name : "Babatunde",
    country : "Nigeria",
    age : 23,
    typeOfCitizen : function(){
        if(this.age > 65){
            return "Senior Citizen"
        }else{
            return "Junior Citizen"
        }
    }
}
console.log(newPerson.typeOfCitizen())


//ES6 formats for writing object literals
const city = "Miami"
const myCountry = "America"

const cityData = {
    city,
    myCountry,
    name : "Joseph"
}
console.log(cityData)


// Computed property Name - ES6
const town = "nameOfTown"

const anotherCityData = {
    country : "America",
    [town] : "Brooklyn"
}
console.log(anotherCityData)
let nameOfT = anotherCityData.nameOfTown
console.log(nameOfT)


// Nested Object literal
const student = {
    name : "Ibinabo",
    age : 56,
    address : {
        city : "Lagos",
        street : "Down Below Mini Ochamba",
        country : "Nigeria"
    },
    studentLaptopDetail : {
        brand : "Macbook",
        size : "14 Inches",
        color : "Silver"
    }
}
console.log(`The student's name is ${student.name} and their country is ${student.address.country}`)


// Destructuring
const {age:personAge, name:personID, studentLaptopDetail} = student
console.log(personAge)
console.log(personID)
console.log(studentLaptopDetail)

const {brand} = studentLaptopDetail
console.log(brand)


// Create an object literal using an object constructor
const car = new Object()
car.brand = "Mercedes"
car.color = "Black"
car.year = 2013
console.log(car)

// Array Literal
const fruits = [
    "Oranges",
    "Bananas",
    "Peaches",
    "Pineapples"
]

// Access an item in an array
let storeFruit = fruits[1]
console.log(storeFruit);

// Modify an item in an array
fruits[1] = "Apples"
console.log(fruits)

// Length of an array - This is a property
let lengthResult = fruits.length
console.log(lengthResult)

// push method
fruits.push("Cashew")
console.log(fruits)

// Pop Method
fruits.pop()
console.log(fruits)

//Shift method
fruits.shift()
console.log(fruits)

// Unshift method
fruits.unshift("Oranges")
console.log(fruits)


// Iterating over an array
const countries = [
    "Kenya",
    "Canada",
    "Nigeria",
    "Ghana",
    "Cameron"
]

for(let x = 0; x < 5; x++){
    let arrayResult = countries[x]
    console.log(arrayResult)
}


// Array of objects
const studentRecords = [
    {
        studentName : "Andrew",
        studentID : 9684,
        studentCountry : "Kenya",
        score : 48
    },
    {
        studentName : "Anne",
        studentID : 454,
        studentCountry : "Canada",
        score : 64
    },
    {
        studentName : "Sophie",
        studentID : 9574,
        studentCountry : "Nigeria",
        score : 57
    }
]


// Filter method
const filterResult = studentRecords.filter( items => items.score >= 50)
console.log(filterResult)

// For Loop
for(let x = 0; x < studentRecords.length; x++){
    let report = studentRecords[x]
    console.log(report.studentName)
}

// For Each method
studentRecords.forEach((item)=>{
    console.log(item)
})

// Map Method
const numbers = [1,2,3,4]
const newNumbers = numbers.map((item)=>{
    return item * 10
})
console.log(newNumbers)

// Spread Operator
const firstArray = [1,2,3,4,5]
const secondArray = [6,7,8,9,10]
const newResultArray = [firstArray, secondArray]
console.log(newResultArray)