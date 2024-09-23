class Persona {
    constructor(nombre, apellido , edad, sexo, direccion, tel, correo, horario){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._sexo=sexo;
        this._direccion=direccion,
        this._tel=tel;
        this._correo=correo;
        this._hoarario=horario;
    }

}
class alumnos extends persona{
    constructor(matricula, carrera, semestre){
        this._matricula=matricula;
        this._carrera=carrera;
        this._smetre=semestre;
        SourceBuffer(nombre, apellido, horario);

        mensaje(){
            console.log(`soy el alumno ${this._nombre}y estudio la carrera de ${this._carrera}`)
        }
    }
}

let alumno1=new alumnos("dany", "cambrano", "10-16", "23E20105", "sistemas", "3");
alumno1.mensaje();

class alinomo


