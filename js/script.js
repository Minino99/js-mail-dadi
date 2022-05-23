// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// (non usare includes() o indexOf)

// Gioco dei dadi
// Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Esercizio Bonus: la coda dell’array
// Creare un array con un numero a piacere di elementi.
// Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
// Attenzione #1: quanti elementi minimo dovrà contenere l’array?
// Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.

// Extra Bonus
// Creiamo un array chiedendo all’utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
// Attenzione #3: quali controlli dobbiamo fare sull’input dell’utente?

// Super Extra Bonus: chiedere all’utente anche quanti elementi vanno estratti dal fondo dell’array.

// Creo un input in html dove l'utente inserirà la propria email, mentre in js
// creo un array contenente alcuni indirizzi email che andrò a paragonare con l'input dell'utente
// se l'email appartiene alla lista allora continua con il programma, caso contrario
// stampa a schermo un alert.

// Creo un array contenente i numeri da 1 a 6, faccio un ciclo che si ripeterà
// n volte che darà come output uno dei numeri contenenti nell'array, sommandoli
// a fine ciclo. Duplico il ciclo per il secondo giocatore. Creo una condizione
// dove chi ha fatto il numero più alto venga dichiarato vincitore

const emailAddresses = [
  "loizzo.pasqualino@gmail.com",
  "pakoloizzo@gmail.com",
  "seiautorizzato@msn.com",
  "ok",
];
let emailInput = document.getElementById("userEmail");
const diceNumbers = [1, 2, 3, 4, 5, 6];
let validEmail = false;
let userValue = (0);
let cpuValue = (0);
const playNow = document.getElementById("playnowbtn");
const addResult = document.querySelector(".container");

playNow.addEventListener("click", function () {

 console.log("prova event listener")

  // for (let i = 0; i < emailAddresses.length; i++) {
  //   if (emailInput.value === emailAddresses[i]) {
  //     validEmail = (true);
  //   }
  // }

  // if (validEmail) {
  //   for (let i = 0; i < 2; i++) {
  //     cpuValue =
  //       (cpuValue + diceNumbers(Math.floor(Math.random() * diceNumbers.length)));
  //     userValue =
  //       (userValue + diceNumbers(Math.floor(Math.random() * diceNumbers.length)));
  //   }
  // } else {
  //   addResult.innerHTML += ("<h1>NON SEI PRESENTE IN WHITELIST</h1>");
  // }

  // document.getElementById("usernumber").innerHTML = (userValue);
  // document.getElementById("cpunumber").innerHTML = (cpuValue);

  // if (cpuValue < userValue) {
  //   addResult.innerHTML += ("<h1>Hai VINTO contro la CPU</h1>");
  // } else if (cpuValue === userValue && cpuValue + userValue != 0){
  //   addResult.innerHTML += ("<h1>Hai PAREGGIATO contro la CPU</h1>");
  // } else if (cpuValue > userValue){
  //  addResult.innerHTML += ("<h1>Hai PERSO contro la CPU</h1>");
  // } else if (cpuValue === 0 && userValue === 0){
  //  addResult.innerHTML += ("");
  // }
});
