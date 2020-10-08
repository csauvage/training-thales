import {Human, Worker} from './Worker'

// Type possible
// Boolean : true / false

const isActived : boolean = false;


// Number : Plus petit décimal / milliard

let pi: number = 3.14116
let milliard: number = Math.pow(10,9)
let white: number = 0xfff // Hexadecimal

// String 

let greetings: string = "Hello, world"

// Le type Enum 

enum Days {
    Monday, 
    Tuesday, 
    Wednesday,
    Thursday
}

let today : Days = Days.Thursday

console.log(`Today is : ${today}`);

// Any

let myAnyVariable: any = "Bonjour"

console.log(myAnyVariable)

myAnyVariable = 42

console.log(myAnyVariable)

// Collection

// Array 
//[24, () => console.log(), 14, () => console.log()]

let myNumberArray: number[] = [1, 2, 3, 4];
let myStringArray: string[] = ['Hello', 'World'];

let myArrayGeneric: Array<number> = [] 

let x = myStringArray[0].substring(0,2)


// Object

let objectValue :object = {
    foo: 42,
    bar: "Hello",
    baz: true
}


// Tuple 

interface DailyActivity {
    day: Days,
    readonly activity: string,
    duration: number,
    moniteur?: string //optionnel
}

let daily: [Days, string, number] = [Days.Monday, 'Tir a l\'arc', 2];
let daily2: [Days, string, number] = [Days.Thursday, 'Judo', 1];
let daily3: [Days, string, number] = [Days.Wednesday, 'Patisserie', 3]; 


let iDaily1: DailyActivity = {
    day: Days.Monday,
    activity: 'Poney',
    duration: 3
}

function greets(firstname: string): void {
    console.log()
}

function greetsJob(firstname: string, job?: string): string | number {
    return job ? `Congrats ${firstname} for your new position as ${job}` : 0
}


const florian = new Human('Florian', 26, 'X');
console.log(florian);

const worker = new Worker('Daniel', 'Guichard', 75, 'Chanteur');
console.log(worker.getJob())
console.log(Worker.position) 



