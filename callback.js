setTimeout(function() {
    console.log('Hola Mundo');
}, 3000);

let getUsuarioByID = (id, callback) => {

    let usuario = {
        nombre: 'Fernando',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la BD`);
    } else {
        callback(usuario);
    }

    callback(usuario);
}

getUsuarioByID(10, (usuario) => {
    console.log('Usuario de base de datos', usuario);

});