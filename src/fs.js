const fs = require('fs')

const fileName = 'example.txt'

//Create

fs.writeFileSync(fileName, 'Hola, Archivo creado con JS')
console.log('Archivo Creado Correctamente')

//Read 
const content = fs.readFileSync(fileName, 'utf-8')
console.log(`File content: ${content}`)

//Update
fs.appendFileSync(fileName, '\nNew Line.\n')
console.log(`Contenido Actualizado con exito`)

//Delete
fs.unlinkSync(fileName)
console.log(`Archivo ${fileName} eliminado con exito`)