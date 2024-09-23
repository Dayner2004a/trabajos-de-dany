/*// Clase Alumno
class alumno {
    constructor(numerodecontrol, nombre, apellido, edad){
    this._numerodecontrol = numerodecontrol;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
}

mostrarinformacion(){
   return  `numerodecontrol;
   ${this._numerodecontrol}, 
   nombre; ${this._nombre}
   ${this._apellido}, 
   edad ${this._edad}`;
 }
}

 

// Clase materia
class materia {
    constructor(nombre) {
     this._nombre = nombre;   
    }

    mostrarinformacion() {
        return materia `${this._nombre }`
    
    }
}

//clase docente
class docente extends alumno {
    constructor(numerodecontrol, nombre, apellido, edad, materia){
        super(numerodecontrol. nombre, apellido, edad);
        this._materia = materia;
    }
    
    mostrarinformacion() {
        return `${super.mostrarinformacion()},
        materia: ${this._materia.mostrarinformacion()}`;
        
    }
}

// clase calificacion
class calificacion extends alumno {
    constructor(numerodecontrol, nombre, apellido, edad, materia, calificacion1, calificacion2) {
        super(numerodecontrol, nombre, apellido, edad);
        this._materia = materia;
        this._calificacion1 = calificacion1;
        this._calificacion2 = calificacion2;
    }

    mostrarinformacion() {
        return `${super.mostrarinformacion()},
        materia: ${this._materia.mostrarinformacion()},
        calificacion: ${this._calificacion1}, ${this._calificacion2}`;
    }
} */

    

    //clase apersona

    class persona{
        constructor(nombre){
            this.nombre=nombre;
        }
    }

    // clase alumno

    class alumno extends persona {
        constructor(numerocontrol, nombre) {
            super(nombre); // llama al constructor de persona
            this._numerocontrol = numerocontrol;
            this.calificaciones = {};

        }

        agregarcalificacion(materia, docente, calificaciones) {
            this._calificaciones[materia] = {docente, calificaciones};

        }

        calcularpromedio(materia) {
            const {calificaciones} = this.calificaciones[materia];
            const suma = calificaciones.reduce((acc, cal)=> acc + cal, 0);
            return suma/calificaciones.length;
        }

    }

    // clase docente que hereda de persona

    class docente extends persona {
        constructor(nombre) {
            super(nombre);
        }
    }

    //datos de ejemplo 
    const alumno = [
        new alumno(1, "dany"),
        new alumno(2, "luis")
    ];

    const docente = [
        new docente("jose"),
        new docente("pedro"),
        new docente("juan")
    ];
    // asignacion de calificacion
    alumno[0].agragarcalificacion("matematica", docente[0].nombre, [90, 95, 90]);
    alumno[0].agragarcalificacion("fisica", docente[1].nombre, [85, 75, 80]);
    alumno[0].agragarcalificacion("programacion", docente[2].nombre, [30, 30, 30]);

    alumno[1].agragarcalificacion("matematicas", docentes[0].nombre, [75, 85, 80]);
    alumno[1].agragarcalificacion("fisica", docente[1].nombre, [70, 30, 4]);

    //mostrar informacion en tabla
    function mostrartabla(alumno) {
        console.log("numerocontrol | alumno | materia   | docente | calificacion  promedio");
        console.log("-----------------------------------------------------------------------");

        alumno.array.forEach(alumno => {
            for ( const materia in alumno.calificaciones) {
                const { docente, calificaciones} = alumno.calificaciones[materia];
                const promedio = alumno.calcularpromedio(materia);
                console.log(
                    `${alumno,numerocontrol}    | ${alumno.nombre} | ${materia.padEnd(12)}  | ${docente.padend(6)} | ${calificaciones.join(", ")} | ${promedio.tofixed(2)} `
                );
            }
        });
        }

        //Llamar a la funcion para mostrar la tabla 
        mostrartabla(alumno);