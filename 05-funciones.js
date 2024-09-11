//factory funcion
const persona={
    nombre:"Dayner",
    edad:20

}
const Persona2={
    nombre:"Benito",
    edad:"20"

}

function datospersona(nombre,edad){
    return{
        nombre:nombre,
        edad:edad,
        active:true
    }
}

let personal=datospersona("Dayner",20);
let persona2=datospersona("Benito",20);
// console.log(persona1,persona2);
//camel case
const datosUsuario={
    nombre:"Dayner",
    edad:20,
    password:"200318",
    direccion:{
        colonia:"Las flores",
        calle:"Francisco imadero",
        numext:123

    },
    sueldo:234,24
    guardarUsuario:function(){
        console.log("Guardar usuario....");
    }
}

//datosUsuario.guardarUsuario();

//Add registro y parametros a los objetos definisdo
const user={id:1};
user,nombr="Dayner";
user,guardarUser=function(){
    console.log("guardar user...");
}
console.log(user);
user,guardarUser();

//Objetivos definidos
const person={id:1,nombre:"Dayner"};
person.id=2;
person,nomnre="Benito"
person.edad=20;

//console..log(oersin);
//pasar funcionescomo parametros
function pitbull(nombre){
    nombre=nombre;
    this.nombre=nombre;
}
function Animañ1(fn,argumento){
    return new fn(argumento)
}

let animal=animal1(pitbull,"fidudays")
console.log(animal);

