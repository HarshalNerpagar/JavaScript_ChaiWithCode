// Primitive DataTypes : These are the data types which are used as a copy
// 7 types : String, Number, Boolean, null, Undefined, Symbol

let id = Symbol('123')
let anotherId = Symbol('123')

// Reference  ( Non-Primitive ) : These are the data types which are used as it is
// 3 Types = Array, Objects, Functions

let heros = [
    "Shaktiman",
    "Naagraj"
]

let myObj = {
    name : "Raju",
    age : 12
}

let myFunc = function(){
    console.log("Hello Harshal")
}
console.log(typeof myFunc)
