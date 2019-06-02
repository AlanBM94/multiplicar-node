// Destructuración
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

// Permite pasar argumentos a través de la consola
const argv = require('./config/yargs').argv;
const colors = require('colors');
let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
    break;
    default:
        console.log('Comando no reconocido');
}
// let argv2 = process.argv;

// console.log('limite' + argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];



// console.log(process.argv);