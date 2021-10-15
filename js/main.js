/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
 Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.
 Occhio solo a non saltare troppi passaggi logici che per qualcuno sono ostici.
*/

// costante definita dal numero inserito dall'utente
const number = parseInt(prompt('inserisci un numero'));

// se il numero è pari
if (number % 2 === 0) {
  alert(number); // restituisci il numero inserito
} else { // se il numero è dispari
  alert(number + 1); // restituisci il numero inserito + 1
};