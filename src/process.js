console.log(`ID del proceso (PID): ${process.pid}`)
console.log(`Directorio actual (CWD): ${process.cwd()}`)
console.log(`Nombre del archivo: ${process.argv[0]}`)
console.log(`Ruta del archivo: ${process.argv[1]}`)
console.log(`Argumentos de línea de comandos: ${process.argv.slice(2)}`)
console.log(`Version Node: ${process.version}`)
console.log(`Plataforma: ${process.platform}`)
console.log(`Arquitectura: ${process.arch}`)
console.log(`User Profile ${process.env.HOME || process.env.USERPROFILE}`)


process.on('exit', code => {
    console.log(`Proceso Terminado ${code}`)
})

process.on('SIGINT', () => {
    console.log(`Se presiono CTRL + C`)
    process.exit(0)
})

console.log('Escribe algo y dale enter o ctr+c para salir')

process.stdin.on('data', data => {
    const input = data.toString().trim()
    console.log(`Ingresaste: ${input}`)

    if (input.toLowerCase() === 'salir') {
        console.log('Adios...')
        process.exit(0)
    } else {
        console.log(`Escribiste ${input}`)
        console.log('Escribe salir para terminar o escribe algo mas');
    }
})