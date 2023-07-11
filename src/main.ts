// Index Signatures

// interface TransactionObj {
//   readonly [index: string]: number
// }

interface TransactionObj {
  readonly [index: string]: number
  Pizza: number,
  Books: number,
  Job: number
}

const todaysTransations: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

console.log(todaysTransations.Pizza)
console.log(todaysTransations['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransations[prop])

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction]
  }
  return total
}

console.log(todaysNet(todaysTransations))

// todaysTransations.Pizza = 40 // not allowed becuse readonly

console.log(todaysTransations['Dave'])


////////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined
  name: string
  GPA: number
  classes?: number[]
}

const student: Student = {
  name: 'Doug',
  GPA: 3.5,
  classes: [100, 200]
}

// console.log(student.test) // Still can access property that doesnt exist

// for (const key in student) {
//   console.log(`${key}: ${student[key]}`) // works only with index signature
// }

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`) // works even WITHOUT index signature
}

Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student]) // Also works
})

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA')
logStudentKey(student, 'name')

//////////////////////////////////////

// interface Incomes {
//   [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250
}

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes])
}
