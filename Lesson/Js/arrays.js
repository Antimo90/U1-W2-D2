// un array nello sviluppo software rappresenta una LISTA, una COLLEZIONE di valori.
// a differenza degli oggetti, non esistono "etichette" (chiavi)
// viene utile per rappresentare cose come elenchi di nomi, di cose, di numeri, di oggetti

// un array in JS si dichiara utilizzando la parola const e delimitandone il valore con [ ]

const nomi = ["Amin", "Anna", "Christian", "Francesco", "Gerardo"];
const numeri = [40, 20, 34.56, 12000];
const booleani = [false, false, true, false];

const mixed = ["Stefano", 101, true, "Fufi"];

// i valori all'interno di un array NON hanno una chiave/etichetta/nome
// quindi l'unica cosa che li differenzia è la loro P O S I Z I O N E (indice)

// gli array in JS sono zero-indexed based, il primo elemento ha SEMPRE posizione 0
// ogni array in JS ha una LUNGHEZZA (length), che è pari al NUMERO DI ELEMENTI che contiene
// l'ultimo elemento di un array avrà SEMPRE posizione lunghezza-1

// per recuperare un elemento da un array, si utilizzano le quadre e la sua
// POSIZIONE (indice)
nomi[0]; // 'Amin'
numeri[2]; // 34.56
mixed[3]; // 'Fufi'

const message =
  "Io mi chiamo " +
  nomi[1] +
  ", il mio numero preferito è " +
  numeri[0] +
  " e dico sempre il " +
  booleani[2];

console.log(message);

// EXTRA: selezioniamo indici casuali
// // Math.random() genera un numero da 0.0000001 a 0.9999999
// Math.random() * 3
// Math.floor abbatte un numero all'intero più basso

// const message =
//   'Io mi chiamo ' +
//   nomi[Math.floor(Math.random() * 3)] +
//   ', il mio numero preferito è ' +
//   numeri[Math.floor(Math.random() * 3)] +
//   ' e dico sempre il ' +
//   booleani[Math.floor(Math.random() * 3)]

const pets = ["dog", "cat", "hamster", "redfish", "turtle"];

// "dog" sarebbe pets[0]
// "cat" sarebbe pets[1]
// "hamster" sarebbe pets[2]
// "redfish" sarebbe pets[3]
// "turtle" sarebbe pets[4]

console.log(pets[0]); // primo elemento dell'array
// mentre per l'ultimo...
console.log(pets[pets.length - 1]); // pets.length - 1 in questo caso è come dire 4

// AGGIUNGIAMO UN ELEMENTO AD UN ARRAY
const cars = ["punto", "panda", "stilo", "360modena"];
// IN CODA:
cars.push("bravo");
// quanti elementi ha adesso l'array? 5
console.log(cars);
// IN CIMA:
cars.unshift("multipla");
console.log(cars);
// IN MEZZO:
cars.splice(1, 0, "500"); // a che posizione, quanti da eliminare, quali da aggiungere
console.log(cars);

// ELIMINIAMO UN ELEMENTO DA UN ARRAY
// IN CODA:
cars.pop(); // senza argomenti, fa saltare sempre l'ultimo
console.log(cars);
// IN CIMA:
cars.shift();
console.log(cars);
// IN MEZZO
cars.splice(3, 1); // a che posizione, quanti ad eliminare (nessun terzo valore perchè
// non stiamo aggiungendo niente!)
console.log(cars);

const arrayOfArrays = [
  [13, 17, 23, 29],
  ["Anna", "Alessandro", "Valerio"],
  [true],
  [
    { name: "Poppy", age: 2 },
    { name: "Gigio", age: 1 },
    { name: "Crokky", age: 5 },
  ],
];

console.log(arrayOfArrays[3][1].age); // 1

arrayOfArrays[1][2]; // 'Valerio'

// X ANNA
arrayOfArrays.sort();
console.log(arrayOfArrays);

// eliminiamo il topo "Gigio"
arrayOfArrays[2].splice(1, 1);
console.log(arrayOfArrays);
