const fs = require('fs');
var colors = require('colors');
// const fs = require('express');
// const fs = require('../fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('no es un numero');
            return;
        }
        if (!Number(limite)) {
            reject('no es un numero');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`abla-${base}.txt`.green);
        });
    });
}

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        console.log('no es un numero');
        return;
    }

    if (!Number(limite)) {
        console.log('no es un numero');
        return;
    }
    console.log("============".green);
    console.log(`===tabla de ${base}===`.green);
    console.log("============".green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}