// Funksjon som aktiverer det valgte lyset
function setLight(light) {
  // Først fjerner vi aktive klasser fra alle lysene
  document.getElementById("rodt").classList.remove("active");
  document.getElementById("orange").classList.remove("active");
  document.getElementById("gronn").classList.remove("active");

  // Vi aktiverer riktig lys
  if (light === "rodt") {
    document.getElementById("rodt").classList.add("active");
  } else if (light === "rodt+orange") {
    document.getElementById("rodt").classList.add("active");
    document.getElementById("orange").classList.add("active");
  } else if (light === "gronn") {
    document.getElementById("gronn").classList.add("active");
  }
}

// Funksjon som starter den automatiske lyssekvensen
function lightTimer() {
  setTimeout(activeRed, 1000); /// Vi starter med rødt lys etter 1 sekund
}

// Funksjon for rødt lys
function activeRed() {
  setLight("rodt");
  setTimeout(activeRedAndOrange, 3000);
}

// Funksjon for rødt og oransje lys
function activeRedAndOrange() {
  setLight("rodt+orange");
  setTimeout(activeGreen, 3000);
}

// Funksjon for grønt lys
function activeGreen() {
  setLight("gronn");
  setTimeout(activeRed, 3000);
}
