//  ESERCIZIO 1 Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri: -se v e’ minore di 18, stampare in console “insufficiente” -se v e’ maggiore uguale a 18 e minore di 21, stampare in console “sufficiente” -se v e’ maggiore uguale a 21 e minore di 24, stampare in console: “buono” -se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto” -se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo” -se v e’ uguale a 30, stampare in console: “eccellente” Esempio: let v = 29; Output: Ottimo Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch, case.

alert("Benvenuto nel tuo libretto.")

let v;

do {

    v = Number(prompt("inserisci il tuo voto:"));

    if (v >= 0 && v < 18) {
        console.log("insufficiente");
    } else if (v < 21) {
        console.log("sufficiente");
    } else if (v < 24) {
        console.log("buono")
    } else if (v < 27) {
        console.log("distinto");
    } else if (v <= 29) {
        console.log("ottimo");
    } else if (v == 30) {
        console.log("eccellente");
    } else {
    console.log("inserisci un numero compreso tra 0 e 30");
    }

    switch (true){
        case (v >= 0 && v < 18):
            console.log("insufficiente");
            break;
        case (v < 21):
            console.log("sufficiente");
            break;
        case (v < 24):
            console.log("buono");
            break;
        case (v < 27):
            console.log("distinto");
            break;
        case (v <= 29):
            console.log("ottimo");
            break;
        case (v == 30):
            console.log("eccellente");
            break;
        default:
            console.log("inserisci un numero compreso tra 0 e 30");
        } 
} while ( Number.isNaN(v) || v > 30);

//  ESERCIZIO 2 Scrivere un programma che converta una temperatura con una delle seguenti descrizioni: -se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni” -se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu” -se temperatura e’ minore di 30, stampare “mi dia una peroni sudata” -se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’” -se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi” Cercate di risolvere questo esercizio utilizzando prima if else e poi con switch case.

alert("Modi di dire sul tempo.")

let temp;

do {

    temp = Number(prompt("inserisci una temperatura:"));

    if (temp < -10) {
        console.log("copriti…ancora ti raffreddi");
    } else if (temp < 0) {
        console.log("non e’ tanto il freddo quanto l’umidità’");
    } else if (temp < 20) {
        console.log("non ci sono piu’ le mezze stagioni");
    } else if (temp < 30) {
        console.log("mi dia una peroni sudata");
    } else {
        console.log("lu mare, lu sole, lu ientu");
    }

    switch (true){
        case (temp < -10):
            console.log("copriti…ancora ti raffreddi");
            break;
        case (temp < 0):
            console.log("non e’ tanto il freddo quanto l’umidità’");
            break;
        case (temp < 20):
            console.log("non ci sono piu’ le mezze stagioni");
            break;
        case (temp < 30):
            console.log("mi dia una peroni sudata");
            break;
        default:
            console.log("lu mare, lu sole, lu ientu");
    }
} while ( Number.isNaN(temp));

// ESERCIZIO 3 Scrivere un programma che simuli un distributore di bevande: fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt: se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua” se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola” se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra” se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza (modificato) PS: Potete provare ad inserire condizioni e controlli ulteriori se volete sperimentare. Stupitemi!

alert("-Distributore di bibite JScript console-")

let codice;
let maggiorenne;
do {
    if (maggiorenne == "no"){
        codice = prompt ("inserisci il numero della bevanda: \n 1 - acqua \n 2 - coca cola");
    } else {
        codice = prompt("inserisci il numero della bevanda: \n 1 - acqua \n 2 - coca cola \n 3 - birra");
    }

    if (codice == 1) {
        console.log("E’ stata selezionata l’acqua");   
    } else if (codice == 2) {
        console.log("E’ stata selezionata coca cola");
    } else if (codice == 3) {
        maggiorenne = prompt("hai almeno 18 anni: si o no");
        if (maggiorenne == "si") {
            console.log("E’ stata selezionata birra");
        } else if (maggiorenne == "no") {
            console.log("uuuuuuuuuuuuuuuu non la puoi bere!");
            codice = 0;
        }
    }
} while (codice != 1 && codice != 2 && codice != 3);

// ESERCIZIO DEI DADI Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N), simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti, supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore Math.floor(Math.random() * (max - min + 1) + min)

alert("Gioco dei dadi")

let player1 = prompt("inserire nome primo giocatore:");
let player2 = prompt("inserire nome secondo giocatore:");

let lanci;

do {
    lanci = Number(prompt("Quanti lanci volete fare? \ninserite il numero di lanci:"));
} while ( lanci <= 0 );

let lancio1;
let lancio2;
let punteggio1 = 0;
let punteggio2 = 0;

for (let i = 0; i < lanci; i++) {
    lancio1 = Math.floor(Math.random() * (6 - 1) + 1);
    punteggio1 = punteggio1 + lancio1;
    console.log(`${player1} lancio ${i+1}: ${lancio1}`);
    lancio2 = Math.floor(Math.random() * (6 - 1) + 1);
    punteggio2 = punteggio2 + lancio2;
    console.log(`${player2} lancio ${i+1}: ${lancio2}`);
}

let diff = Math.abs(punteggio1 - punteggio2);

console.log(`${player1}: ${punteggio1} \n${player2}: ${punteggio2}`);

if (diff == 0) {
    console.log("un pareggio");
} else if ((diff / lanci) < 2) {
    console.log("al pelo!");
} else if ((diff / lanci) < 4 ) {
    console.log("una partita equilibrata")
} else if ((diff / lanci) <= 5 ) {
    console.log("la fortuna si e' schierata!")
} else {
    console.log("la fortuna si e' schierata... e anche la sfortuna!")
}