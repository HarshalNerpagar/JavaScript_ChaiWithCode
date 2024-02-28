/*
                     Covering All Types Of Variables
 */

const accountId = 12312
let accountUserName = "xyz"
var accountEmail = "xyz@google.com"
accountName = "xxyyzz"

console.table([accountId, accountUserName, accountEmail, accountName])

// const accountId = 31243    <-- When we assign any variable with -> const <- we can't able to change there values



accountUserName = "abcd" // For all the other type of variable declaration we can change the values of variable
accountEmail = "abcd@google.com"
accountName = "aabbccdd"

console.table([accountUserName, accountEmail, accountName])


/*
Note : Prefer to not use -> var & direct <- type of variable declaration
Use one -> const & let <-
 */