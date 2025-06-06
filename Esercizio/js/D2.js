/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n1 = 25;
const n2 = 96;

if (n1 > n2) {
  console.log("Questo è il numero pià grande");
} else {
  console.log("Questo è il numero pià grande");
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (n1 !== 5) {
  console.log("not equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (n1 % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n3 = 24;
const n4 = 16;

if (n3 === 8 || n4 === 8) {
  console.log("il valore di uno di essi sia 8");
} else if (n3 + n4 === 8 || n3 - n4 === 8) {
  console.log("la loro addizione/sottrazione sia uguale a 8");
} else {
  console.log("ho sbagliato");
}
/*ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 70;

let shippingCost;
let totalAmountDue;

if (totalShoppingCart > 50) {
  shippingCost = 0;
  console.log("Spedizione Gratuita");
} else {
  shippingCost = 10;
  console.log("Costo di spedizione: $" + shippingCost);
}

totalAmountDue = totalShoppingCart + shippingCost;

console.log("Totale carrello: €" + totalShoppingCart);
console.log("Totale da addebitare all'utente: €" + totalAmountDue);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCartAfterDiscount;
const blackFridayDiscountPercentage = 0.2;

totalShoppingCartAfterDiscount =
  totalShoppingCart - totalShoppingCart * blackFridayDiscountPercentage;
if (totalShoppingCartAfterDiscount > 50) {
  shippingCost = 0;
  console.log("Complimenti! Hai diritto alla spedizione gratuita.");
} else {
  shippingCost = 10;
  console.log("Costo di spedizione: €" + shippingCost);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numb1 = 99;
let numb2 = 7;
let numb3 = 69;

let first;
let second;
let third;

if (numb1 >= numb2 && numb1 >= numb3) {
  first = numb1;
  if (numb2 >= numb3) {
    second = numb2;
    third = numb3;
  } else {
    second = numb3;
    third = numb2;
  }
} else if (numb2 >= numb1 && numb2 >= numb3) {
  first = numb2;
  if (numb1 >= numb3) {
    second = numb1;
    third = numb3;
  } else {
    second = numb3;
    third = numb1;
  }
} else {
  first = numb3;
  if (numb1 >= numb2) {
    second = numb1;
    third = numb2;
  } else {
    second = numb2;
    third = third;
  }
}

console.log("Ordine finale: " + first + ", " + second + ", " + third);
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(typeof n1);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (n3 % 2 === 0) {
  console.log("pari");
} else {
  console.log("dispari");
}
//  ESERCIZIO 10
// Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
//  let val = 7;
//  if (val < 10) {
//  console.log("Meno di 10");
//  } else if (val < 5) {
//  console.log("Meno di 5");
//  } else {
// console.log("Uguale a 10 o maggiore");
// }

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 2;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me.skills);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [];
numeri.unshift(1);
numeri.push(10);
numeri.splice(1, 0, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(numeri);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri.splice(9, 1, 100);
