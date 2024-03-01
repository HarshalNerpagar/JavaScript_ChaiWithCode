// ++++++++++++++++ Arrays ++++++++++++++++ //


const myArr = [0, 1, 2, 3, 4, 5]

// myArr.push(6) // -( .push )- get used to add new element at the last
// myArr.pop() // -( .pop )- get used to remove last element
// myArr.unshift() // -(.unshift )- used to add element at 0'th index
// myArr.shift() // -( .shift )- used to remove element at 0'th index
// myArr.includes(5) // -( .includes )- It checks whether the provided value is in the array or not
// myArr.indexOf(3) // -(.index )- It returns the index of the provided value

// const newArr = myArr.join() // -( .join )- this method converts the Array into String
// console.log(newArr) // output : -( 1,2,3,4,5 )-
// let removeCommas = newArr.replaceAll(",", "")
// console.log(removeCommas) // output : -( 12345 )-


// ++++++++++ Slice & Splice ++++++++++++ //

// console.log("Main arr :" , myArr)

// let sliceArray = myArr.slice(1,4);
// console.log("slice returns", sliceArray); /* It returns the array form
// starting Index to ending Index - 1 */
//
// console.log("Main arr after -( .slice )- operation :" , myArr);
// /* -( . slice )- this method can't make any change in main array */



// let spliceArray = myArr.splice(1,4);
// console.log("splice returns", spliceArray); /* It returns the from the starting index
//  to the count of the provided value */
//
// console.log("Main arr after -( .splice )- operation :" , myArr); /* -( .splice )- method
//  removes the splice return part from the main array */

// ++++++++++++ Merging 2 or more arrays ++++++++++++ //

// let arr01 = ["a", "b", "c", "d"];
// let arr02 = ["e", "f", "g", "h"];
// let arr03 = ["i", "j", "k", "l"];
//
// let newArray = [...arr01, ...arr02, ...arr03]
// // This -( ... )- spreads the arrays and merge them
// console.log("Merged Array :",newArray)



// arr01.push(arr02) // -( .push )- This method works similar to append method of Python
// console.log(arr01);

// +++++++++++++++ To convert any elements into Array +++++++++++++++ //

let ourString = "NewtonSchool"
let ourNewArray = Array.from(ourString) // This methods any String into Array
















