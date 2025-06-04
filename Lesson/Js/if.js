// LOGICA CONDIZIONALE
// Nel codice, come nella vita, vanno prese delle decisioni.
// Tramite istruzioni come il costrutto "if" è possibile dire a JS di eseguire
// un blocco di istruzioni SOLO se una determinata condizione valuterà "true".

const myName = "Stefano";

if (myName === "Mario" || myName === "Stefano") {
  // questo blocco di istruzioni verrà eseguito solamente se la condizione nell'if
  // tornerà true
  console.log("Benvenuto!");
}

const eyeColor = "brown";

if (eyeColor === "azure" || eyeColor === "green") {
  console.log("Che begli occhi che hai!");
} else {
  // se gli occhi non sono azure e non sono green
  console.log("Hai degli occhi mediocri");
}

const car = {
  name: "Multipla",
  owner: {
    drivingLicense: true,
    age: 20,
  },
};

if (car.owner.drivingLicense === true) {
  console.log("Portami al mare!");
} else {
  console.log("andiamo in corriera");
}

// TRUTHY / FALSY
// in JS TUTTI i valori possono venire valutati come condizione.

if ("Stefano") {
  // si vede!
  console.log("ciao!");
}

// 'Stefano' non è una condizione, ma è una stringa valida, con contenuto. Tanto basta
// per renderlo un valore "tendente al vero" (truthy)

if (300) {
  console.log("THIS IS SPARTA");
}

// ogni numero che non è 0 (o -0) è un valore truthy

// OGNI VALORE IN JS SE VALUTATO COME CONDIZIONE TORNA TRUE ECCETTO:
// 0 e -0
// null
// undefined
// '' (stringhe vuote)
// NaN

if (0) {
  console.log("questo messaggio non si vede!");
} else {
  // vedremo sempre questo messaggio!
  console.log("qui entriamo sempre nell'else");
}
