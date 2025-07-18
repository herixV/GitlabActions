function suma (a,b) {
    return a + b;
}

function esPar (numero) {
    // un numero es par si es divisible entre 2 sin dejar residuo
    // cambiar el 1 por el 2
    return numero % 2 === 0;
}

function dividir (a, b) {
    if (b === 0) 
        return "Error: División por cero";
    return a / b;
}

// poner el split(" ") con espacio para separar el nombre y apellido
// y luego tomar el primer caracter de cada parte ya que si no hay espacio
// no se puede separar el nombre y apellido

function obtenerIniciale (nombreCompleto) {
    const partes = nombreCompleto.split(" ");
    return partes[0][0] + partes[1][0];

}


// se espera una fecha en formato 'YYYY-MM-DD'
// y se devuelve en formato 'DD/MM/YYYY'
function formatearFecha (fechaStr) {
    // se espera una fecha en formato 'YYYY-MM-DD'
    const partes = fechaStr.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}


// Exportar funciones para poder usarlas en test.js
module.exports = {
    suma,
    esPar,
    dividir,
    obtenerIniciale,
    formatearFecha
};