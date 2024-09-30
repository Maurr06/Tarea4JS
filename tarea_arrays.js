// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
  let nombrecliente = pedido.shift()
  pedido.unshift("bebida")
  pedido.push(nombrecliente)
  console.log(pedido)
}

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
  let suma = 0
  for (let i = 0 ; i < numeros.length ; i++) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i]
    }
  }
  return suma
}

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
  // Metodo facil
  // let contador = 0
  // for(let i = 0 i < palabras.length i++){
  //     elemento = palabras[i]
  //     if (elemento[elemento.length - 1] === 'a'){
  //         contador += 1
  //     }
  // }
  // if (contador === palabras.length) return true
  // else return false

  // Metodo Mejorado.
  for (let palabra of palabras) {
    if (palabra[palabra.length - 1] !== "a") {
      return false
    }
  }
  return true
}

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras más largas que ese índice.
function buscaPalabras(words, word) {
  let palabras_mas_largas = []
  let indice = -1
  // metodo indexof
  // indice_palabra = words.indexOf(word)
  
  // Metodo largo
  for(let i = 0 ; i < words.length ; i++){
    if (words[i] === word){
      indice = i 
    }
  }

  for(let i = indice+1 ; i < words.length ; i++){
    if(words[i].length > word.length){
      palabras_mas_largas.push(words[i])
    }
  }
  return palabras_mas_largas
}

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].

function findJavaScript(matrix) {
  for(let i = 0 ; i < matrix.length ; i++){
    for(let j = 0 ; j < matrix[i].length ; j++){
      // metodo corto
      // return [i, j]
      // let j = matrix[i].indexOf('JavaScript')

      // Metodo simple
      if (matrix[i][j] === 'JavaScript'){
        return [i, j]
      }
    }
  }
  return [-1, -1]

  
}


// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
  let mayor = 0
  let menor = books[0]
  for(let i = 0 ; i < books.length ; i++){
    paginas_libro = books[i]
    if (paginas_libro > mayor) mayor = i
    else if(paginas_libro < menor) menor = i
  }
  return [menor, mayor]
}

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
  procesarPedido,
  sumarPares,
  palabrasTerminanConA,
  buscaPalabras,
  findJavaScript,
  findMinMaxPages,
}
