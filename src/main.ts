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
