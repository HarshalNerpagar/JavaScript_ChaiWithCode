/*
              DataTypeConversions
 */


let marks = "efds" // This is the number

marks = Number(marks)
console.log(marks)  // When we try's to convert any string to number it gives output ( NaN - not a number)

// marks = Boolean(marks)
// console.log(marks) // when we converts any string into Boolean it gives output ( false )


let emptySting = ""

emptySting = Number(emptySting)
console.log((emptySting)) // When we converts any empty string into Number we get output ( 0 )

// emptySting = Boolean(emptySting)
// console.log(emptySting)  // When we converts any empty string into Boolean it gives output ( false )

