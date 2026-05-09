//Basic Outputs
console.info('Mostrando Informacion con console.info')
console.warn('Advertencia')
console.error('Error')

//TABLE
console.table([
    {name: 'Juan',age: 30, job: 'Developer'},
    {name: 'Maria',age: 25, job: 'Designer'},
    {name: 'Carlos',age: 35, job: 'Manager'}
], ['name', 'job'])

//Time
console.time('Operation')
for(let i =0; i<10000000; i++){
    //Empty loop
}
console.timeEnd('Operation')

//Count
console.count('contador')
console.count('contador')
console.count('contador')
console.countReset('contador')
console.count('contador')

//Afirmaciones
console.assert(1 === 1,'Esto no se muestra')
console.assert(1 === 2,'Esto si se muestra')

// console.trace('Mostrar pila de llamadas actual')