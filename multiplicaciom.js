//metodo para meter parametros en consola
const argv=require('./config/yargs').argv;
const colors=require('colors/safe')
//requiere el paquete
/*El fsmódulo proporciona una API para interactuar con el 
sistema de archivos de una manera muy similar a las funciones estándar POSIX.*/ 
//const fs = require('fs');
//para importar archivos es necesario conocer el modulo
const {crearArchivo,listarTabla}=require('./multiplicar/multiplicar.js');
let base='abc'
//console.log(process.argv);
//Introducir algo en consola
/*let argv2=process.argv;
console.log(argv.base);
console.log('limite',argv.limite);*/
let comando=argv._[0];
switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e=>console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
//console.log(multiplicar);
/*
hay 3 tipos a
1-propio de node => const fs = require('fs');
2-paquetes que no son propios de node => const fs = require('express');
3- en el propio proyecto en la computadora => */