let stringArr = ['one', 'hey', 'Vova']

let guitars = ['Strat', 'Les Paul', 5190]

let mixedData = ['EVH', 1984, true]

// stringArr[0] = 42 - error
stringArr[0] = 'John'
// stringArr.push(42) - error
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')
// guitars.unshift(true) - error

// stringArr = guitars - error
// guitars = mixedData - error
guitars = stringArr
mixedData = guitars

let test = []
let bards: string[] = []
bards.push('Van Helen')
// bards.push(true) - error

// Tuple
let myTuple: [string, number, boolean] = ['Vova', 33, true]

let mixed = ['John', 1, false]

mixed = myTuple
// myTuple = mixed - error
// myTuple[3] = 42 - error
myTuple[1] = 10

/////////////////////////////////////////
// Objects






