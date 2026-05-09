console.log(`Hora Actual: ${new Date().toLocaleTimeString()}`) 

const timeOut = setTimeout(() => {
    console.log('Mensaje despues de dos segundos');
    console.log(`Dentro del Timeout: ${new Date().toLocaleTimeString()}`) 
}, 2000);

setImmediate(() =>{
    console.log(`Mensaje aparece en la siguiente iteracion del bucle`);
    console.log(`Hora setImmediate: ${new Date().toLocaleTimeString()}`) 
})

const intervalId =setInterval(() =>{
    console.log(`Mensaje cada 3000 milisegundos`);
    console.log(`Hora setInterval: ${new Date().toLocaleTimeString()}`) 
}, 3000);


setTimeout(() =>{
    console.log('Cancelar Intervalo despues de 10 segundos');
    clearInterval(intervalId)
}, 10000);

const timeOutClear = setTimeout(() => {
    console.log("Mensaje que nunca se va a mostrar porque se cancela")
}, 1000);

clearTimeout(timeOutClear)

console.log(`Hora Final: ${new Date().toLocaleTimeString()}`) 
