const colors = require('colors');

const log = function(message) {
    console.log(message)
};

const log2 = message => console.log(`${message}`.yellow)

const someObject = {
    message: 'Nous pouvons ajouter des fonctions aux objets, car les f° sont des var',
    log(message) {
        console.log(message.cyan);
    }
}


log2('En JS, les fonctions sont des variables');

someObject.log(someObject.message)

const myArray = [
    "message 1 : Function can be inserted into arrays",
    message => console.log(message.bgBlue),
    "because onece more, they are VARIABLES",
    message => console.log(message.bgYellow),

]

myArray[1](myArray[0]);
myArray[3](myArray[2]);


// Function peuvent etre envoyées comme des arguments 

const inception = logger => {
    logger('This function as been esent as argument');
}

inception(message  => console.log(message))

// Function peuvent etre envoyées comme retour a des fonctions 
// Higher order functions

const creerCri = logger => {
    return message => {
        logger(message.toString().toUpperCase().red + ' !!!')
    }
}

const cri = creerCri(message => console.log(message));

cri('Une fonction peuvent etre retournées par des fonctions');
cri('creerCri renvoie une fonction');
cri('cri appelle cette fonction créée');

// TODO : Check this
const createScream = logger => message => {
    logger(message.toString().toUpperCase().blue + ' !!!');
}

const test = createScream(m => console.log(m));
test('test')


// Imperative vs Declaratif 


const title = "Restaurants a la Defense"
let titleUrlFriendly = ""

for(let char of title) {
    if(char === " ") {
        titleUrlFriendly += "-"
    } else {
        titleUrlFriendly += char.toLowerCase()
    }
}

console.log(`Title : ${title} devient : ${titleUrlFriendly.bold.underline}`)



titleUrlFriendly = title.replace(/\s/g, '-').toLowerCase()
console.log(`Imperative title : ${title} devient : ${titleUrlFriendly.bold.underline}`.blue)




