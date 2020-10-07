const color = require('colors');

// Recursion 

// Timer 

const countDown = (value, fn, delay = 1000) => {
    fn(value);
    return value > 0 ? setTimeout(() => countDown(value - 1, fn, delay), delay) : value
};


//countDown(100, value => console.log(value), 500);






const search = (fields, object) => {

    // Array.prototype.split(,)
    const [first, ...remaining] = fields.split('.')
    return (remaining.length) 
        ? search(remaining.join('.'), object[first])
        : object[first].toString().blue.bold;
}

console.log(search("overview", film))
console.log(search("release_date", film))
