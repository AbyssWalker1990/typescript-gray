let myName = 'Vova' // inferred as string
let myName1: string = 'Vadim' // explicitly declare as string
let myName3: string

// myName = 42 - will be error
myName = 'Volodymyr'  // still can reassign to another string

let meaninigOfLife: number
let isLoading: boolean
meaninigOfLife = 42
isLoading = true

let album: any
album = 'Van Helen'
album = 1984
album = false

const sum = (a: number, b: string) => {
  return a + b
}

let album1: string | number  // union type
album1 = 'string'
// album1 = true  - error

let postId: string | number
let isActive: number | boolean


