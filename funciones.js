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

function test(desc, fn) {
    try {
        fn();
        console.log(`✅ ${desc}`);
    } catch (error) {
        console.error(`❌ ${desc}`);
        console.error("" + error.message);
    }
}

function assertEquals(actual, esperado) {
    if (actual !== esperado) {
        // Aquí usas backticks para interpolar variables
        throw new Error(`Esperado: ${esperado}, pero obtuvo: ${actual}`);
    }
}



// Aqui deben escribir sus pruebas
// suma
test("Suma 2 + 2 = 4", () => {
    assertEquals(suma(2,2), 4);
});
test("Suma 2.5 + 10.3 = 12.8", () => {
    assertEquals(suma(2.5,10.3), 12.8);
});
test("Suma 0 + 0 = 0", () => {
    assertEquals(suma(0,0), 0);
});

// esPar
test("es par 4 / 2 = true", () => {
    assertEquals(esPar(4), true);
})
test("es par 1 / 2 = false", () => {
    assertEquals(esPar(1), false);
})
test("es par 6 / 2 = true", () => {
    assertEquals(esPar(6), true);
})
test("es par 3 / 2 = false", () => {
    assertEquals(esPar(3), false);
})
test("es par 0 / 2 = true", () => {
    assertEquals(esPar(0), true);
})

// dividir
test("Dividir 10 / 2 = 5", () => {
    assertEquals(dividir(10,2), 5);
})
test("Dividir 10 / 0 = Error: División por cero", () => {
    assertEquals(dividir(10,0), "Error: División por cero");
})
test("Dividir 10 / 6 = 1.666666666667", () => {
    assertEquals(dividir(10,6), 1.6666666666666667);
})

// obtenerIniciale
test("Obtener iniciales de 'Juan Perez' = 'JP'", () => {
    assertEquals(obtenerIniciale("Juan Perez"), "JP");
})
test("Obtener iniciales de 'Hery Swiat", () => {
    assertEquals(obtenerIniciale("Hery Swiat"), "HS");
})
test("Obtener iniciales de 'Hery", () => {
    assertEquals(obtenerIniciale("Hery"), "H");
})

// formatearFecha
test("Formatear fecha '2023-10-01' = '01/10/2023'", () => {
    assertEquals(formatearFecha("2023-10-01"), "01/10/2023");
})
test("Formatear fecha '2023-01-15' = '15/01/2023'", () => {
    assertEquals(formatearFecha("2023-01-15"), "15/01/2023");
})
test("Formatear fecha '2023-1-15' = '15/01/2023'", () => {
    assertEquals(formatearFecha("2023-1-15"), "15/01/2023");
})