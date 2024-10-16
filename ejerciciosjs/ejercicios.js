function verificarPar(){
    var numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    var resultado = document.getElementById("resultado1");

    if (isNaN(numero)) {
        resultado.innerText = "Por favor, ingresa un número válido";
    } else if (numero % 2 == 0) {
        resultado.innerText = "El número es par";
    } else {
        resultado.innerText = "El número es impar";
    }
}

function mostrarTabla() {
    var numero = document.getElementById("numero2").value;
    numero = parseInt(numero);

    if (isNaN(numero)) {
        document.getElementById("resultado2").innerText = "Por favor, ingresa un número válido.";
        return;
    }

    var tabla = "Tabla de multiplicar de " + numero + ":\n";
    for (var i = 1; i <= 10; i++) {
        tabla += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    document.getElementById("resultado2").innerText = tabla;
}

function productoSumas(){
    var numero1 = document.getElementById("numero3").value;
    var numero2 = document.getElementById("numero4").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    var resultado = 0;
    for(var i=0; i<numero2; i++){
        resultado = resultado + numero1;
    }
    var result = "El resultado de la multiplicación es: " + resultado;
    document.getElementById("resultado3").innerText = result;
}

function encontrarMayor() {
    const inputNumeros = document.getElementById("numeros").value;
    const numeros = inputNumeros.split(",").map(Number);

    if (numeros.length === 0 || isNaN(numeros[0])) {
        document.getElementById("resultado4").innerText = "Por favor ingresa una lista válida de números.";
        return;
    }

    let mayorValor = numeros[0];
    let posicionMayor = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayorValor) {
            mayorValor = numeros[i];
            posicionMayor = i;
        }
    }

    document.getElementById("resultado4").innerText = `El mayor valor es ${mayorValor} y se encuentra en la posición ${posicionMayor + 1}.`;
}

function sumarVectores() {
    // Obtener los vectores A y B del usuario
    const vectorA = document.getElementById("vectorA").value.split(",").map(Number);
    const vectorB = document.getElementById("vectorB").value.split(",").map(Number);
    
    // Verificar que ambos vectores tengan la misma longitud
    if (vectorA.length !== vectorB.length) {
        document.getElementById("resultado5").innerText = "Los vectores A y B deben tener la misma longitud.";
        return;
    }

    // Crear un nuevo vector C donde almacenaremos las sumas
    const vectorC = [];

    // Sumar los elementos correspondientes de A y B
    for (let i = 0; i < vectorA.length; i++) {
        vectorC.push(vectorA[i] + vectorB[i]);
    }

    // Mostrar el resultado en el HTML
    document.getElementById("resultado5").innerText = "El vector C (suma de A y B) es: [" + vectorC.join(", ") + "]";
}

function media(){
    const vector = document.getElementById("secuencia").value.split(",").map(Number);
    let cont = 0, suma = 0, result = 0, mayor = -1;
    let i = 0;
    for(i; i<vector.length; i++){
        suma = suma + vector[i];
        cont++;
    }
    result = suma / cont;
    document.getElementById("resultado6").innerText = "La media de la secuencia es: " + result;
}

function mostrarNumerosOrdenados() {
    // Obtener la secuencia de números ingresada
    const secuencia = document.getElementById("secuenciaOrden").value;
    
    // Convertir la secuencia en un arreglo de números
    const arreglo = secuencia.split(",").map(Number);
    
    // Validar si los números ingresados son válidos
    if (arreglo.some(isNaN)) {
        document.getElementById("resultadoOrden").innerText = "Por favor, ingresa solo números válidos.";
        return;
    }

    // Ordenar los números de menor a mayor
    arreglo.sort((a, b) => a - b);

    // Mostrar los números ordenados
    document.getElementById("resultadoOrden").innerText = "Los números en orden son: " + arreglo.join(", ");
}

function procesarTextos() {
    // Obtener la secuencia de textos ingresada
    const secuencia = document.getElementById("secuenciaTextos").value;
    
    // Dividir la secuencia en un arreglo de textos
    const textos = secuencia.split(",");

    // Variable para almacenar los resultados
    let resultado = "";

    // Recorrer cada texto y procesarlo
    textos.forEach(texto => {
        const longitud = texto.length;
        const mayusculas = texto.toUpperCase();
        const minusculas = texto.toLowerCase();
        
        // Formar el resultado para cada texto
        resultado += `Texto: "${texto}"<br>`;
        resultado += `Longitud: ${longitud}<br>`;
        resultado += `En mayúsculas: ${mayusculas}<br>`;
        resultado += `En minúsculas: ${minusculas}<br><br>`;
    });

    // Mostrar el resultado en el HTML
    document.getElementById("resultadoTextos").innerHTML = resultado;
}