const fs = require('fs');
const colors=require('colors')
let listarTabla=(base,limite=10)=>{
    console.log('====================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('====================='.green);
    for(let i=1;i<=limite ;i++){
        console.log(`el resultado de ${base} * ${i} = ${i*base}\n`);
    }
}
let crearArchivo=(base,limite = 10)=>{
    return new Promise((resolve,reject)=>{

        if (!Number(base)){
            reject(`el valor introducido ${base} no es un numero`)
            return
        }
        let datos='';

        for(let i=1;i<=limite;i++){
            datos += `el resultado de ${base} * ${i} = ${i*base}\n`
        }   



        fs.writeFile(`tablas/tabla-${base}-al-${limite}-.txt`, datos, (err) => {
        //del collback recibimos el error  
        if (err) reject(err);
        else 
            resolve(`tabla-${base}-al-${limite}-.txt`);
        
        });
    })
}

module.exports={
    crearArchivo,
    listarTabla
}