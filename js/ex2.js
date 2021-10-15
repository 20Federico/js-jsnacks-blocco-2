
/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi
fino a quando ne avrà tanti quanti l’altro.
*/

// creo variabili degli array 
// const array1 = [15, 2, 7];
// const array2 = [5];

const array1 = ['ciao'];
const array2 = ['hola', 'hello'];

if (array1 > array2) {

  // cicla un numero di volte pari alla differenza tra array1 e array2
for (i = 0; i = (array1.length - array2.length); i++) {
  // aggiungi all'array2 un numero di elementi pari alla differenza tra il numero di elementi in array1 e gli elementi in array2
  array2.push(' ');

  console.log(array1);
  console.log(array2);

}
} else if (array2 > array1) {
  for (i = 0; i = (array2.length - array1.length); i++) {
    array1.push(' ');
  }

  console.log(array1);
  console.log(array2);

} else if (array1 = array2) {
  console.log(array1);
  console.log(array2);
}