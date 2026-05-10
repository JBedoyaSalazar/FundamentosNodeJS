const { Buffer } = require('buffer')

const bufferFromString = Buffer.from("Hello world", "utf8")
console.log(bufferFromString)

const bufferAlloc = Buffer.alloc(10)
console.log(bufferAlloc);

bufferAlloc.write("Node JS")
console.log(bufferAlloc);

const bufferToString = bufferAlloc.toString()
console.log(bufferToString);