// Array.prototype.map()
// Array.prototype.reduce()
// Array.prototype.join()
const personnages = ["Polochon", "Ariel", "Triton", "Ursula", "Eric"];

console.log(personnages.join(","));
console.log(personnages.filter(p => 'aeiouy'.includes(p[0].toLowerCase())))
console.log(personnages.map(perso => `🐠 ${perso}`));
console.log(personnages);

/* Colors */
const lavender = {
    name: 'lavender',
    hexCode: '#DCD0FF',
    rating: 0
};

const silver = {
    name: 'silver',
    hexCode: '#C0C0C0',
    rating: 0
};

const tomato = {
    name: 'tomato',
    hexCode: '#ff6347',
    rating: 0
};

const colors = [lavender, silver, tomato];

const hashColors = colors.reduce((hash, {name, hexCode, rating}) => {
    hash[hexCode] = {name, hexCode, rating}
    return hash
}, {});

console.log(hashColors)