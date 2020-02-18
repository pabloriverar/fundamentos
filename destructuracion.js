let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',

    getNombre() {
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`
    }

};

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;


console.log(deadpool.getNombre());