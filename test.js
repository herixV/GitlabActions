// Importar funciones desde funciones.js
const {
    suma,
    esPar,
    dividir,
    obtenerIniciale,
    formatearFecha
} = require('./funciones.js');

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

// formatearFecha
test("Formatear fecha '2023-10-01' = '01/10/2023'", () => {
    assertEquals(formatearFecha("2023-10-01"), "01/10/2023");
})
test("Formatear fecha '2023-01-15' = '15/01/2023'", () => {
    assertEquals(formatearFecha("2023-01-15"), "15/01/2023");
})