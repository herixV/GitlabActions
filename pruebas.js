function test (desc, fn) {
    try {
        fn();
        console.log(`✅ ${desc}`);
    } catch (error) {
        console.error(`❌ ${desc}`);
        console.error("" + error.message);
    }

}

function assertEquals (actual, esperado) {
    if (actual !== esperado) {
        throw new Error('Esperado:${esperado}, pero obtuvo :${actual}');
    }
}


// Aqui deben escribir sus pruebas

test("Suma 2 + 2 = 4", () => {
    assertEquals(suma(2,2), 4);
});