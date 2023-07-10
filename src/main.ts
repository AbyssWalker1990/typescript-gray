// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name?: string,
  active: boolean, // optional
  albums: stringOrNumberArray
}

type UserId = stringOrNumber

// interface PostId = stringOrNumber - error


// Literal types
let myName: 'Vova'
// myName = 'John' - error

let userName: 'Vova' | 'John' | 'Amy'
userName = 'Amy'
// userName = 'Reychel' - error

// Functions
const add = (a: number, b: number): number => {
  return a + b
}

const logMessage = (message: any): void => {
  console.log(message)
}

logMessage('Hello')
logMessage(add(2, 4))
logMessage(add(7, 3))

let subtract = function (c: number, d: number): number {
  return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//   (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
  return c * d
}

logMessage(multiply(2, 2))

// optional params
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c
  }
  return a + b
}

// Default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c
}

logMessage(addAll(2, 3, 3))
logMessage(addAll(2, 3))
logMessage(sumAll(2, 3))
logMessage(sumAll(undefined, 3))
