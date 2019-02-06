// const fs = require('express');
// const fs = require('../fs');
const argv = require('./config/yargs').argv;
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite).then(file => {
            console.log(`archivo ${file} creado!!!!`);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('comando no reconocido');
        break;
}
//console.log(argv);