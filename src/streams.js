const fs = require('fs')
const path = require('path')

const readableStream = fs.createReadStream(path.join(__dirname, 'Eloquent.txt'), { encoding: 'utf-8' })
const writableStream = fs.createWriteStream(path.join(__dirname, 'Output-EloquentCopy.txt'))

readableStream.on('data', chunk => {
    console.log(`Chunk: ${chunk}`);
    writableStream.write(chunk)
})

readableStream.on('end', () => {
    console.log('Termino de leer el archivo');
    writableStream.end()
})

readableStream.on('error', error => console.log(`Error: ${error}`))

writableStream.on('error', error => console.log(`Error al escribir el archivo: ${error}`))