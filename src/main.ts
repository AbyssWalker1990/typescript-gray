import { BADHINTS } from "dns"

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
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bards
myObj = {}

const exampleObj = { // inferred data types
  prop1: 'Vova',
  prop2: true
}

// exampleObj.prop2 = 42 - error
exampleObj.prop2 = false
exampleObj.prop1 = 'John'

type Guitarist = {
  name?: string,
  active?: boolean, // optional
  albums: (string | number)[]
}

// interface Guitarist {
//   name: string,
//   active?: boolean, // optional
//   albums: (string | number)[]
// }

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
  name: 'Jimmy',
  albums: ['I', 'II', 'IV']
}

evh = jp
// evh.years = 40 - error, cant add new proprty

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`
  }
  return 'Hello'
}

console.log(greetGuitarist(jp))

// Enums

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U)








