/*
// annotation
let x: number = 10;
let y:string = "Mario"

// inferencia 
let z = 12

// tipos básicos
let firstName: string = "Mario"
let age: number = 27
const isAdmin: boolean = true

// object
const myNumbers: number[] = [1, 2, 3]

// tuplas
let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]]

// object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Mario",
    age: 27,
}
console.log(user)

// any -> aceita qualquer tipo de dado
let a: any = 0
a = "Teste"


// não sei quantos tipos de dados vou ter
// union type
let id: string | number = "10"
id = 200

// type alias
type myIdType = number | string
const userID: myIdType = 10
const productID: myIdType = "100000"

// enum
// tamanho de roupas (size: medio, size: pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa Gola V",
    size: Size.G
}


// literal types
let teste: "algumvalor" | null
teste = "algumvalor"
teste = null

// funcoes
function sum(a: number, b: number){
    return a + b
}
console.log(sum(12, 12))

function sayHelloTo(name: string): string {
    return `Hello ${name}`
}
console.log(sayHelloTo('Mario'))

// função sem return, utiliza-se void
function logger(msg: string): void {
    console.log(msg)
}

function greeting(name: string, greet?: string) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`)
        return;
    }       
    console.log(`Olá ${name}`)    
}
greeting("Mario", "Sir")
greeting("Mario")

// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}
console.log(sumNumbers({n1: 2, n2: 2}))

function multiplyNumber(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}
console.log(multiplyNumber({n1: 2, n2: 5}))

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}
console.log(multiplyNumber(someNumbers))


// narrowing -> checagem de tipos
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log("o numero é " + info);
        return;
    }
    console.log("Não foi passado um numero");
}


// generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => console.log(item))
}

const a1 = [1, 2, 3]
const a2 = ["1", "2", "3"]

showArraysItems(a1)
showArraysItems(a2)

*/

// classes
class User {
    
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`A role do usuário é ${this.name}`)
            return
        }
        console.log(`Informação restrista`)
    }
}

const zeca = new User("Zeca", "Admin", true)
console.log(zeca)
zeca.showUserName()
zeca.showUserRole(false)

// interfaces em classes
interface IVehicle {
    brand: string,
    showBrand(): void
}

class Car implements IVehicle {

    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`)
    }

}

const fusca = new Car("VW", 4)
fusca.showBrand()


// herança
class SuperCar extends Car {

    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
    
}

const a4 = new SuperCar("Audi", 4, 2.0)
a4.showBrand()



// decorators 
function BaseParameters() {
    return function<T extends {new (...args: any[]): {}}> (constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParameters()
class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person("Sam")
console.log(sam)