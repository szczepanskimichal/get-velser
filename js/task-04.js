// Funkcja, która aktywuje wybrane światło
function setLight(light) {
  // Najpierw usuwamy aktywne klasy z wszystkich świateł
  document.getElementById("rodt").classList.remove("active");
  document.getElementById("orange").classList.remove("active");
  document.getElementById("gronn").classList.remove("active");

  // Włączamy odpowiednie światło
  if (light === "rodt") {
    document.getElementById("rodt").classList.add("active");
  } else if (light === "rodt+orange") {
    document.getElementById("rodt").classList.add("active");
    document.getElementById("orange").classList.add("active");
  } else if (light === "gronn") {
    document.getElementById("gronn").classList.add("active");
  }
}

// Funkcja, która uruchamia automatyczny cykl świateł
function lightTimer() {
  setTimeout(activeRed, 1000); // Startujemy z czerwonym światłem po 1 sekundzie
}

// Funkcja dla czerwonego światła
function activeRed() {
  setLight("rodt");
  setTimeout(activeRedAndOrange, 3000); // Po 3 sekundach przechodzimy do czerwono-pomarańczowego
}

// Funkcja dla czerwono-pomarańczowego światła
function activeRedAndOrange() {
  setLight("rodt+orange");
  setTimeout(activeGreen, 3000); // Po 3 sekundach przechodzimy do zielonego
}

// Funkcja dla zielonego światła
function activeGreen() {
  setLight("gronn");
  setTimeout(activeRed, 3000); // Po 3 sekundach wracamy do czerwonego
}
