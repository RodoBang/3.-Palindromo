// Primero crearemos la funcion para verificar si una palabra es palindromo

function esPalindromo(palabra) {
    // Convertimos la palabra a minúsculas para ignorar diferencias entre mayúsculas y minúsculas
    palabra = palabra.toLowerCase();

    // Invertimos la palabra

    let palabraInvertida = palabra.split("").reverse().join("");

    // Comparamos la palabra original con la invertida

    if(palabra === palabraInvertida){
        console.log("La palabra '" +palabra+"' es un palíndromo.");
    }else{
        console.log("La palabra '" +palabra+"' no es un palíndromo.");
    }
}

// Ejemplo de uso
let palabra = "oso";
esPalindromo(palabra);  

// La palabra 'oso' es un palíndromo