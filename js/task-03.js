let seconds = 0;
let timer;

// tellerstart
function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      app.textContent = ++seconds;
    }, 1000);
  }
}

// pause
function pauseTimer() {
  clearInterval(timer);
  timer = null;
  document.getElementById(
    "lastRound"
  ).innerHTML += `<li>${seconds} sekunder</li>`;
}

// reset
function resetTimer() {
  clearInterval(timer); // stopper timeren
  timer = null;
  seconds = 0; // tilbakestiller sekunder
  document.getElementById("app").textContent = "0"; // reset
  document.getElementById("lastRound").innerHTML = ""; // Czyści listę rund
}
