// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// (non usare includes() o indexOf)

const emailAddresses = [
  "loizzo.pasqualino@gmail.com",
  "pakoloizzo@gmail.com",
  "seiautorizzato@msn.com",
  "ok",
];

const playNow = document.getElementById("playnowbtn");

playNow.addEventListener("click", function () {
  let emailInput = document.getElementById("userEmail");
  let validEmail = false;
  const addResult = document.querySelector(".result");
  console.log("prova event listener");

  for (let i = 0; i < emailAddresses.length; i++) {
    if (emailInput.value === emailAddresses[i]) {
      validEmail = true;
    }
  }

  if (validEmail) {
      addResult.innerHTML = "<h1>SEI PRESENTE IN WHITELIST</h1>";
    } else {
      addResult.innerHTML = "<h1>NON SEI PRESENTE IN WHITELIST</h1>";
    }
  });
