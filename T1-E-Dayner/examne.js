//Evaluacion tema 1

const prompt = requiere("prompt-sync")(); 
const porc = 0.15;
class comparativa{
    constructor(nombre, apellido, rfc, direccion, telefono){
        this._nombre=nombre;
        this._apellido=aoellido;
        this._rfc=rfc;
        this._direccion=direccion;
        this._telefono=telefono;
        this._cosxhora=cosxhora;
        this._hrstra=hrsta;
        this._agregarEm=agregarEm;
        this._sueldo=0;
    }
}

//getter
//geter
agregarEmp(){
    let tamaño=parseInt(promt("cantidad de empleafos a dar de alta"));
for(let i=0; i < tamaño; i++) {
    this._nombre = prompt("ingrese el nombre del empleado: ");
    this._hrstra = parseInt(prompt("numero de horas trabajasdas: "));
    this._cosxhra = parseFloat(prompt(" ingrese el costo por hora: "));

}
}
elimimarEmp(){(
    this._agregarEm.length < 0
? this._agregarEm.pop()
: console.log("no a registro que elimniar")
)
calcularSueldo(){
    if (this._hrshra < 8){
        this._sueldo =this._cosxhra * this._hrstra;
        return (this._sueldo = 
            this._sueldo + this._cosxhra * porc * (this._hrstra - 8 ));
        } else {
            return (this._sueldo = this._cosxhra * this._hrstra);

    }
}
}

mostrarEmpleados(){
    this._agregarEm.map;(emp) => {

    }
}

let empleados=new  cooperative();
empleados.agregarEm();
empleados.mostrarEmpleados();
empleados.eliminarEmp();
