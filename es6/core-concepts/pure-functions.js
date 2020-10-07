// Pure functions

const polochon = {
    name: "Polochon",
    type: "poisson",
    film: "The little mermaid"
}

// NOT pure
function updateName() {
    polochon.name = "Jean";
} 

//updateName();


const puretUpdateName = object => ({
    ...object,
    name: "Jean"
})


console.log(puretUpdateName(polochon))
console.log(polochon)