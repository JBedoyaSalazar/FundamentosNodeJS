const date = require('date-time-utils')

console.log(`
    TimeStamp: ${date.getTimeStamp()}
    Spanish Date: ${date.getLongTime('es-ES')}
    English Date: ${date.getLongTime()}
    `)