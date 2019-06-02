const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('---------------------------------------'.red);
    console.log(`-----------------Tabla del ${base}----------------------`.red);
    console.log('---------------------------------------'.red);
    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';
        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
          if (err) throw reject(err);
          else resolve(`tabla-${base}-al-${limite}.txt`)
          console.log(`El archivo de la tabla del ${base} y el límite ${limite} ha sido creado`);
        });

    })
}


module.exports = {
    crearArchivo,
    listarTabla
}