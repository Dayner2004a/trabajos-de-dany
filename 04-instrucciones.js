const prompt=requiere(`prompt-sync`)();

/* let numero01=23;
let numero=3;

numero1=parseInt(prompt("ingrese el numero 1; "))
numero2=parseInt(prompt("ingrese el valor 2:"))

console.log(23*3)
*/
 
 /* Realizar un programa que contenga un arreglo indefinido
 en el que se solicite a travez de teclado el tamaño y
 que se ingrese por lo menos 4 valores de cualquier tipo,
 imprimir los valopres en pantalla. */

function infoArreglo(){
    const dimension=parseInt(`ingrese el tamaño de`)
    for(let i=0; i<dimension;i++){
        let datos=prompt("ingrese los datos")
        arreglo.push(datos);

        console,log(arreglo);
        
    }

}



