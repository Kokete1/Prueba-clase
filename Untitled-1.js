// Le falta i
/**
 * 
 * @param arr 
 * @returns 
 */
function calcularSuma(arr) {
    let suma = 0;
    for (i = 0; i < arr.length; i++) { 
        suma += arr[i];
    }
    return suma;
}

// Falta de r

function dividir(a, b) {
    return a / b; 
}


contador = 0; 
// Le falta la i
function bucleInfinito() {
    while (true) {
        console.log("Esto nunca terminará");
    }
}

// Le falta la i
/**
 * 
 * @param nombre 
 */
function saludar(nombre) {
    console.log("Hola" + nombre); // Falta un espacio en la concatenación
}

let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    },
}

// Llamadas incorrectas
console.log(calcularSuma([1, 2, 3]));
dividir(10, 0);
bucleInfinito(); 
saludar(); 
