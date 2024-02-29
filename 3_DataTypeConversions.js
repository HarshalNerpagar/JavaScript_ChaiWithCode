/*
              DataTypeConversions
 */


let marks = "efds" // This is the number

marks = Number(marks)
// console.log(marks)  // When we try's to convert any string to number it gives output ( NaN - not a number)

// marks = Boolean(marks)
// console.log(marks) // when we converts any string into Boolean it gives output ( false )


let emptySting = ""

emptySting = Number(emptySting)
// console.log((emptySting)) // When we converts any empty string into Number we get output ( 0 )

// emptySting = Boolean(emptySting)
// console.log(emptySting)  // When we converts any empty string into Boolean it gives output ( false )



// ##########################  Operations ######################### //

// console.log("1" + 2 + 2) // when we sets string at first then it treats all as a string
//
// console.log(2 + 2 + "1" + 3 + 4) // In this still we have numbers it get treated as
// // a number but when string comes after that all trated as a String
//
// console.log("1" + (2 + 2)) // This is the best way to put paranthises
// // when we uses paranthises it get done first
//

