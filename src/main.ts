class Coder {

  secondLang!: string

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'Typescript'
  ) { }

  public getAge() {
    return `Hello, I'm ${this.age}`
  }
}

const vova = new Coder('Vova', 'Rock', 32)
console.log(vova.getAge())
// console.log(vova.age) // not allowed but can be turn off
// console.log(vova.lang) // not allowed but can be turn off

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age)
  }

  public getLang() {
    return `I write ${this.lang}`
  }
}

const vadim = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(vadim.getLang())
// console.log(vadim.age) // not allowed
// console.log(vadim.lang) // not allowed

////////////////////////////////////////

interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Guitarist implements Musician {
  name: string
  instrument: string

  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))

/////////////////////////////

class Peeps {
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count
  }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Peeps.count)
console.log(Steve.id)
console.log(Amy.id)
console.log(Peeps.getCount())

//////////////////////////////////////////

class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
      this.dataState = value
      return
    } else throw new Error('Params is not array of strings')
  }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zeppelin']
console.log(MyBands.data)

MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data)

// MyBands.data = 'Van Helen' // Error
MyBands.data = ['Van Helen'] // Working

