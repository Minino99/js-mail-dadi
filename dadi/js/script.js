// Gioco dei dadi
// Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const playNow = document.getElementById("playnowbtn");

playNow.addEventListener("click", function () {
  const diceNumbers = [1, 2, 3, 4, 5, 6];
  const addResult = document.querySelector(".result");
  let userValue = 0;
  let cpuValue = 0;

    for (let i = 0; i < 2; i++) {
      cpuValue =
        cpuValue + diceNumbers[Math.floor(Math.random() * diceNumbers.length)];
      userValue =
        userValue + diceNumbers[Math.floor(Math.random() * diceNumbers.length)];
    }

  document.getElementById("usernumber").innerHTML = userValue;
  document.getElementById("cpunumber").innerHTML = cpuValue;

  if (cpuValue < userValue) {
    addResult.innerHTML = "<h1>Hai VINTO contro la CPU</h1>";
  } else if (cpuValue === userValue && cpuValue + userValue != 0) {
    addResult.innerHTML = "<h1>Hai PAREGGIATO contro la CPU</h1>";
  } else if (cpuValue > userValue) {
    addResult.innerHTML = "<h1>Hai PERSO contro la CPU</h1>";
  }
});
