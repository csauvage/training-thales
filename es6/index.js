// -- Variables 
// Using let and const + BlockScoping 

let helloLet = "Hello World";
const helloConst = "Hello, Thales";

// -- Template String 

const firstname = "Clément"
const twitterHandle = "@clementsauvage"

// < 2015 
console.log("My name is " + firstname + "and my twitter handle is " + twitterHandle)

// > 2015
const string = `Template string : My name is ${firstname} and my twitter handle is ${twitterHandle}`;
console.log(string);

// 2018

console.log('Hello'.padStart(15, 'H'))
console.log('Hello'.padEnd(30, 'o'))

// -- Arrow functions
// No block scope => Using keyword this 

function myAwesomeFunction(arg1, arg2) {
    // Do something and 
    return
} 

['Some', 'Word'].map(i => {
    console.log(i);
});

// Promises

/*fs.readDir('/path/to/folder', function(err, folder) {
    // Si pas d'erreur 
    if(!err) {
        fs.readFile('...', function(err, buffer) {
            if(!err) {

            } else {

            }
        })
    } else {

    }
})*/

/*new Promise( (resolve, reject) => {
    // Tambouille magique 

    resolve()

    // Si erreur 

    reject()

})*/

const timeOut = (msDelay) => new Promise (
    (resolve, reject) => {

        const random = (Math.random() * 1000).toFixed(0);
        // Ternary operator 

        // 2 == '2' => OK
        // 2 === '2' => NOK : "===" ; valeur && type
        console.log(msDelay)
        setTimeout(random % 2 === 0 ? resolve(random) : reject(`${random} n'est pas pair`), msDelay);
        
    }
);

// ES 7 
// Await / async 

const asyncFunction = async (msDelay) => {

    try {
        const response = await timeOut(msDelay);
        console.log('After timeout');
        console.log(response);
    } catch (error) {
        console.error(error)
    } 
}

//TO-DO : To look for
(async () => {
    for(let i = 0; i < 10; i += 1) {
        await asyncFunction(3000)
    }
})() 

for(let i = 0; i < 10; i += 1) {
    timeOut(3000)
        .then(data => console.log('Resolved with success : ' + data + ' % 2 === 0'))
        .catch(err => console.error('Promise rejected with error : ' +  err))
}

// Rest & Spread operator 

// Rest
const hotteDuPereNoel = (firstname, ...cadeaux) => {
    console.log(`Bonjour ${firstname} tu as été sage, tu auras :` )
    cadeaux.map(cdx => console.log(`🎁 ${cdx}`));
}

hotteDuPereNoel('Clément', 'Playstation 5');

// Spread

const cadeauxClement = ['Ours', 'Playstation', 'Xbox', 'Voyage en Thaïlande'];
const cadeauxArnaud = [...cadeauxClement, 'Vélo', 'Banc de muscu'];
//console.log(cadeauxArnaud);

// 2016 : Array.prototype.includes

// < 2016 

const contains = (valeur) => cadeauxClement.indexOf(valeur) !== -1

console.log('Ours : ' + contains('Ours'))
console.log('Vélo : ' + contains('Vélo'))
console.log('includes Vélo : ' + cadeauxClement.includes('Vélo'));
console.log('includes Ours : ' + cadeauxClement.includes('Ours'));

// JS Object
const obj = {
    'key' : 'value',
    'key2' : 42,
    'key3' : true
};

const obj2 = {
    ...obj,
    'key3' : false
}

console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))




// Classes 




// for of / for in
console.log(`---
For of / For In
---`)

const iterableArray = ['Ours', 'Playstation', 'Xbox', 'Voyage en Thaïlande']
const objectIterable = {
    firstname: 'Clement',
    lastname: 'Sauvage',
    age: 30,
    city: 'Lille'
}

// Itere sur le contenu du tableau
for (let present of iterableArray) {
    console.log(present)
}

// Itere sur les index du tableau
for (let present in iterableArray) {
    console.log(present)
}

for (let element in objectIterable) {
    console.log(element)
}


// Await iterations
// 2019

await for (let record of records) {
    
}



// Map / Set 
// WeakMap / WeakSet

let set = new Set()
set.add('Hello').add('Goodbye').add('Good Morning')
console.log("set.size", set.size)
console.log("set.has('Hello')", set.has('Hello'))

let duplicateSet = new Set([1,2,3,4,5,6,7,8,9,1,3,5,6,8])
console.log(duplicateSet);
console.log([...duplicateSet]);


// Set 

let map = new Map()
map.set('expected', 42)
map.set('other', 'Foo')
map.set('bar', true)


console.log(map)
console.log('map.get(bar)', map.get('bar'))


// Classes



