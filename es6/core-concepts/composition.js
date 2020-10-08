const moment = require('moment');

// Composition

const clockTemplate = "hh:mm:ss zz"

setInterval(() => {
    const date = moment();
    const time = clockTemplate.replace('hh', date.hour()).replace('mm', date.minute()).replace("ss", date.second()).replace("zz", date.format("A"));
    console.log(time);
    console.info('info')
    console.warn('warn')
    console.error('error')

}, 1000)



