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
