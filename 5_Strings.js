let myName = "Harshal";
let myEnrollNumber = 230076

let oldWayOfConcate = ("My Name is " + myName + "my enrollment number is " + myEnrollNumber + ".") // Not Prefer to USE
// console.log(oldWayOfConcate)

let modernWayOfConcate = `My name is ${myName} this is my enrollment number ${myEnrollNumber}.` // <- Prefer to USE
// console.log(modernWayOfConcate)


// ++++++++++++++++ Some Main Functions we use on Strings +++++++++++++++++++ //

let ourString = "Harshal_Is_A_King"

// console.log(ourString.length) // it prints length of the string

// console.log(ourString.charAt(8)) // -( CharAt )- function prints the element which is on that specific index

// console.log(ourString.indexOf("I")) // -( IndexOf )- function prints the index of the specific element

let splitString = ourString.split("_")
// console.log(splitString) // This is very useful func it splits the string with provided element and returns Array

let newSubstring = ourString.substring(0, 7)
// console.log(newSubstring) // -( .substring )- take to values ( start, end ) and gives the string of in between

let newSlice = ourString.slice()
// console.log(newSlice)

let newTrim = "        Harshal        "
// console.log(newTrim)
// console.log(newTrim.trim()) // This function simply removies all unwanted spaces

let replaceString = "Jay Shree Ram"
let newReplaceString = replaceString.replace("Ram", "Krishna")
// console.log(replaceString)
// console.log(newReplaceString) // -( .replace(searchValue, replaceValue) )- this func takes 2 values 1st value get replaced with 2nd value

// console.log(replaceString.includes("Ram")) // This simply returns true/false is the provided value is present in string it prints true else false





