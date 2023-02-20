/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = [];
   
   for (let clave in objeto) {
      array.push([clave, objeto[clave]])
   };

   return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {};
   let palabraSeparada = string.split('');

   palabraSeparada = palabraSeparada.sort();
   palabraSeparada.forEach((e) => {
      if(objeto.hasOwnProperty(e)) objeto[e] = objeto[e] + 1
      else objeto[e] = 1;
   });

   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayuscula = '';
   let minuscula = '';

   for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) mayuscula = mayuscula + string[i];
      else minuscula = minuscula + string[i];
   };

   let respuesta = mayuscula + minuscula;

   return respuesta;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let separar = frase.split(' ');
   let reflejo = ' ';
   
   for (let i = 0; i < separar.length; i++) {
      let palabra = separar[i];
      let palabraReflejada = '';

      for (let x = palabra.length - 1; x >= 0; x--) {
         palabraReflejada += palabra[x]
      };

      reflejo += palabraReflejada + ' ';
   };

   return reflejo.trim();
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let invertido = numero.toString().split('').reverse().join('');

   if (invertido === numero.toString()) return 'Es capicua';
   else return 'No es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let letras = '';

   for(let i = 0; i < string.length; i++) {
      if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c') letras += string[i];
   };

   return letras
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let nuevo;

   for (let i = 0; i < arrayOfStrings.length - 1; i++) {
      for (let x = i + 1; x < arrayOfStrings.length; x++) {
         if (arrayOfStrings[i].length > arrayOfStrings[x].length) {
            nuevo = arrayOfStrings[i];
            arrayOfStrings[i] = arrayOfStrings[x];
            arrayOfStrings[x] = nuevo;
         }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let nuevoArray = [];

   for (let i = 0; i < array1.length; i++) {
      for (let x = 0; x < array2.length; x++) {
         if (array1[i] === array2[x]) nuevoArray.push(array1[i])
      }
   }
   return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
