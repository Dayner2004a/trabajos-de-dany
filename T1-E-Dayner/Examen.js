class empleados {
    constructor(nombre, apellido, RFC, direccion, telefono){
        this.nombre= nombre;
        this.apellido= apellido;
        this.RFC= RFC;
        this.telefono= telefono;


        saluda()
        console.log(`hola ${this._nombre}
            ${this.apellido}tus datos son,RFC
            ${this.RFC},tu direccion ${this.direccion},
            ${this.telefono}
            `)

            let personas =()=> {
                let contratar = parseInt(prompt("cantidad de emleados a comsultar"))
                let personas = new empleado(
                prompt(`ingrese el nombre: `),
                prompt(`ingrese el apellido`),
                (prompt(`ingrese RFC: ` )),
                prompt(`ingrese direccion: `),
                parseInt(prompt(`ingrese el numero de telefon: `))

                )
                console.log(personas);
                personas.saludas(

                )

            }
            personas()++mmu+

             } 
             