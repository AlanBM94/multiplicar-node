// Permite pasar argumentos a través de la consola
const opciones = {
    // Configuración de parametros
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
            //Te permite decirle a yargs que tu aplicación ahora tiene un nuevo comando  
            .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
            .command('crear', 'Genera un archivo con la tabla de multiplicar', opciones)
            .argv;


module.exports = {
    argv
}