const studenti = [
  {
    nome: "Luca",
    eta: 21,
    corsi: ["Matematica", "Fisica", "Programmazione"],
    indirizzo: {
      citta: "Milano",
      cap: "20100", // studenti[0].indirizzo.cap
      via: "Via Roma 10",
    },
    esami: [
      { materia: "Matematica", voto: 28 },
      { materia: "Fisica", voto: 30 }, // studenti[0].esami[1].materia
      { materia: "Programmazione", voto: 27 },
    ],
  },
  {
    nome: "Giulia",
    eta: 23,
    corsi: [
      "Biologia", // studenti[1].corsi[0]
      "Chimica",
      "Statistica",
    ],
    indirizzo: {
      citta: "Torino",
      cap: "10100",
      via: "Corso Francia 45",
    },
    esami: [
      { materia: "Biologia", voto: 30 },
      { materia: "Chimica", voto: 26 },
      { materia: "Statistica", voto: 29 }, // studenti[1].esami[2].voto
    ],
  },
  {
    nome: "Marco",
    eta: 22,
    corsi: ["Economia", "Marketing"],
    indirizzo: {
      citta: "Roma",
      cap: "00100",
      via: "Via Appia 88",
    },
    esami: [
      { materia: "Economia", voto: 25 },
      { materia: "Marketing", voto: 28 },
    ],
  },
];
