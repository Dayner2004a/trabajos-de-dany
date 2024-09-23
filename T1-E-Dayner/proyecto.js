//Activudad 1 el de cliente

//consulta clientes

class clientes {
    constructor(numeroMembresia, nombre, direccion, telefono) {
        this._numeroMembresia = numeroMembresia;
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
        this, _estado = 'libre';
    }
//contr de cliente

registrocliente(){
    let valorar = parseInt(prompt("ingresa la cantidad de personas para registrar: "));
    for (let i = 0; i < valorar; i++) {
        this, _nombre = prompt("ingresa su nombre");
        //this._numeroMembresia = parInt(prompt("ingrese el numero de membresia: "));
        //this._direccion = prompt("ingrese su direccion: ");
        //this._telefono =  parseInt("ingrese su numero de telefono")
        this._estado = prompt(`cual es el estado (deudor) (libre)`);
        switch (parseInt(this._estodo)) {
            case 1:
                this._estado = `deudor`;
                break;
            case 2:
                this._deudor = `libre`;
                break;
        }

        let datos = {
            nombre: this._nombre,
            numeroMembresia: this._numeroMembresia,
            direccion: this._direccion,
            telefono: this._telefono,
            estado: this._estado,
        }
        this._consulta.push(datos)
    }
    
}

elinarDeudor(){
    for (let i = 0; i < this._consulta.legth; i++){
        if (this._consulta[i].estado === `deudor`) {
            this._consulta.slice(i, i);
            console.log(`cliente ${this._consulta[i].nombre}con membresia a sido dado de baja`);
         
        }else{
            console.log(`cliente ${this._consulta[i].nombre}con membresia sin libre de multa`);
        }

    }
}

}

class cine extends cliente {
    constructor(numero, titulo,clasificacion, disponibilidad, tipo,){
        super()
        this._numero = Numero
        this._titulo = Titulo
        this._clasificacion = Clasificacion
        this._disponobilidad = Disponibilidad
        this._tipo = Tipo
        // this._consultaPeli = []
        // this._precio = 0
    }
   
    //control peliculas
   
    consultaPeli() {
        let pelicula = parseInt(prompt("ingrese las peliculas a consultar"));
        for (let i = 0; i < pelicula; i++){
            //this._numero = parseInt(prompt("ingresa el numero de la peli: "));
            this._titulo = prompt("ingrese el  nombre de la peli: ");
            //this._clasificacion = prompt("Ingresa su clasificacion: ");
            this._disponible = (prompt("aun hay(1. disponble), (2. rentato) "));
            switch (parseInt(this._disponible)) {
                case 1:
                    this._disponible = `disponible`
                    break
            case 2:
                this._disponible = `Renta`
                break        
            }
            this._tipo = prompt("tipo de pelicula(3. estreno), (4. catalogo) ")
            switch (parseInt(this._tipo)) {
                case 3:
                    thise._tipo = `estreno`
                    break
                case 2:
                    this._tipo = `catalogo`
                    break
            }
            let varea = {
                numero: this._numero,
                titulo: this._titulo,
                clase: this._clase,
                disonible: this._disponible,
                tipo: this._tipo,
            }
            this._consultaPeli.push(varea)
         }
     }
     eliminarpelicula(){
        for (let i = 0; i < this._consultpelicula.legth; i++) {
          if  (this._consultapelicula[i].disponible === `rentar`) {
                this._consultarpelicula.slice(i, 1);
                console.log(`la pelicula${this._consultarpelicula[i].titulo}se a rentado`);
         
            }else{ 
               console.log(`La pelicula ${this._consultapelicula[i].titulo} hay disponible`);

            }

        }
     }
     rentarpeliculas(titulo, verif){
        let cinemax = this._consultarpelicula;
        let peliculaEcontrada = null;
        for (let i = 0; i < cinemax.leght;i++){
            if (cinemax[i].titulo===titulo){
                peliculaencontrada = cinemax[i]
                break;
            }
        }
        if (peliculaencontrada){
            if(peliculaencontrada.disponibilidad ===`esta disponible`){
                let deudorlibre=verif._consulta.some(c => c.estado === `deudor`)
                if (deudorlibre){
                    console.log("sal de su deuda");
                 }else{ 
                    if(peliculaencontrada.tipo === `en estreno`){
                        this._preciopelicula=60;
                    }else if(peliculaencontrada.tipo===`catalogo`){
                        this._preciopelicula=40;
                    }
                    let fecharenta = prompt("ingrese su fecha de renta")
                    let fechalime = this.calcularlimite(fecharenta)
                    peliculaencontrada.disponibilidad=`rentas`;
                    peliculasencontradas.fecharentas = fecharentas;
                    peliculaEcontrada.fechalime=fechalime
                    console.log(`la pelicula ${titulo}a sido rentada`);
                    console.log(`fecha de devolucion ${peliculaencontrada.fechalime}`);
                    console.log(`el precio es de ${this._preciopelicula}`);
                }
                }else{
                    console.log("la pelicula no esta disponible");

            }
        }

     }
     calcularlimite(fecharenta){
        let fechalime=new Date(fecharenta);
        fechalime.setDate(fechalime.getDate()+3);
        return fechalime.toISOString().slice(0,10)
     }

    
}
let cliente = new clientes();
cliente.registrocliente();
cliente.eliminardeudor();

let starci = new cine();
starci.consultapelicula();
let titulo = prompt("ingrese el titulo de la pelicula que desee rentar")
let verif = cliente
starci.rentarpeliculas(titulo,verif)
starci.eliminarpelicula();




