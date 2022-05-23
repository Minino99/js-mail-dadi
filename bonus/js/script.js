// Esercizio Bonus: la coda dell’array
// Creare un array con un numero a piacere di elementi.
// Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
// Attenzione #1: quanti elementi minimo dovrà contenere l’array?
// Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.
// Extra Bonus
// Creiamo un array chiedendo all’utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
// Attenzione #3: quali controlli dobbiamo fare sull’input dell’utente?
// Super Extra Bonus: chiedere all’utente anche quanti elementi vanno estratti dal fondo dell’array.

let executeButton = document.getElementById("execute");
let arrayLength = document.getElementById("lenght");
let queueArray = document.getElementById("queue");
let lunghezza = 0;
let coda = 0;

executeButton.addEventListener("click", function () {
  lunghezza = arrayLength.value;
  coda = queueArray.value;
  document.getElementById(
    "printedNumbers"
  ).innerHTML = "";

  let array = [];
  for (let i = 0; i < lunghezza; i++) {
    array[i] = Math.floor(Math.random() * 100);
  }

  for (let i = lunghezza - coda; i < lunghezza; i++) {
    document.getElementById(
      "printedNumbers"
    ).innerHTML += `<li>${array[i]}</li>`;
  }
});
