const _ = require('lodash')
// Mutate is changing => Immutable => Not changable

// Driving licence => Copy => Stroke information
// 1. Original        2. Copie 

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

function rateColorOriginal(color, rating) {
    color.rating = rating
    return color    
}

/*function rateColor(color, rating) {
    
    return Object.assign({}, color, { rating });    
}*/

const rateColor = (color, rating) => ({
    ...color,
    rating
})

//console.log(rateColor(lavender, 5).rating);
//console.log(lavender.rating)

const colors = [
    lavender,
    silver,
    tomato
]

const addColor = (color, colors) => { 
    const array = _.cloneDeep(colors)
    array.push(color);
    return array
}

const removeColor = (colorName, colors) => _.cloneDeep(colors).filter(c => c.name !== colorName)


let froly = {
    name: 'froly',
    hexCode: '#f1737f',
    rating: 5
}

console.log(addColor(froly, colors));
console.log(removeColor('tomato', colors));
console.log(colors);




