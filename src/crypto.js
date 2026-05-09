const crypto = require('crypto')

const text = 'Secreto ultra mega super secreto que ni la Interpol sabe'
const hash = crypto.createHash('sha256').update(text).digest('hex')

// Esta es la forma correcta de hashear un mensaje
console.log(`Texto original: ${text}`)
console.log(`Texto hasheado (SHA-256): ${hash}`)