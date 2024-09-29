class persona{
    constructor(Nombre, Edad, Sexo, Direccion, Telefono) {
        this._Nombre = Nombre;
        this._Edad = Edad;
        this._Sexo = Sexo;
        this._Direccion = Direccion;
        this._Telefono = Telefono;
    }
}

let personas = [];

let agregarPersona = (persona) => {
    personas.push(persona);
};

persona.forEach((persona) => {
   console.log(`numero: ${persona. Nombre} `);
   console.log(`edad: ${persona. edadd}`);
   console.log(`sexo: ${persona. sexo}`);
   console.log(`direccion: ${persona. direccion}`);
   console.log(`telefono: ${persona. telefono}`);
});
    






   

    
    

 