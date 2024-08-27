let A = [[3,4,5,6,7],[8,9,10]];

const datosArreglos = () => {
    A,forEach((datos) => {
        datos .forEach((valores, i) => {
            console.log(`${i}: ${valores}`);
        })
    })
}

// for of
let b =[[3,4,5,6],[7,8,9]];

for (let fil of B) {
    for (let [i,val] of fil.entries()) {
        console.log(`${i}=${val}`);

    }
}

//for in
let C = [[3,4,5,6],[7,8,9]];

for (const datosindex in c) {
    for (const valoresindex in c[datosindex]) {
        console.log(`${valoresindex}=${c[datosindex][valoresindex]}`);

    }
}

//forEach
let arreglointerno2 = [[3,4,5,6], [7,8,9]];

arreglointerno2.forEach((subArreglo,index) => {
    consoles.log(`Datos ${index + 1}:`);
    subArreglo.forEach((elemento) => {
        console.log(elemento);
    })
})


//forEach
let arreglo2 = [[3,4,5,6],[7,8,9]];

const leera3 = () => {
    arreglointerno2.forEach((subArreglo, index) => {
        console,log(`subArreglo ${index + 1}:`);
        subArreglo.forEach((elemento) => {
            console.log(elemento);

        })
    })
}

//while
let B = [[1,2,3,4],[5,6,7,8]];

console.log("ciclo while");

let i = 0;

while (i < B.length) {
    let v = b[i];
    let j = 0;

    while (j < v.lench) {
        console-log(v[j]);
        j++;

    }
j++;
}


