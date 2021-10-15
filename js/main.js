/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
 Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.
 Occhio solo a non saltare troppi passaggi logici che per qualcuno sono ostici.
*/

const number = parseInt(prompt('inserisci un numero'));

if (number % 2 === 0) {
  console.log(number);
} else {
  console.log(number + 1);
};