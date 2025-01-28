let selectedColor = ""; // Przechowuje wybraną nazwę koloru

// Obsługa wyboru koloru dla każdego boksu osobno
const colorBox1 = document.getElementById("colorBox1");
const colorBox2 = document.getElementById("colorBox2");
const colorBox3 = document.getElementById("colorBox3");

colorBox1.onclick = () => selectColor(colorBox1);
colorBox2.onclick = () => selectColor(colorBox2);
colorBox3.onclick = () => selectColor(colorBox3);

function selectColor(colorBoxElement) {
  selectedColor = colorBoxElement.dataset.color;

  // tilbakestill rammer for alle div
  [colorBox1, colorBox2, colorBox3].forEach((box) => {
    box.style.border = "2px solid transparent";
  });

  // ramme
  colorBoxElement.style.border = "4px solid black";

  // valgt farge
  showColorMessage(selectedColor);
}

function showColorMessage(color) {
  let messageElement = document.getElementById("colorMessage");

  // det er ikke noe element - lag det
  if (!messageElement) {
    messageElement = document.createElement("p");
    messageElement.id = "colorMessage";
    messageElement.style.marginTop = "10px";
    messageElement.style.fontWeight = "bold";
    document.body.appendChild(messageElement);
  }

  // Oppdater meldingsinnholdet
  messageElement.textContent = `Farge valgt: ${color}`;
}

// for nå vises de valgte fargene og en melding vises

// endre bakgrunnsfargen på siden
const changeBackgroundColor = document.getElementById("changeBackground");
changeBackgroundColor.onclick = () => {
  if (selectedColor) {
    document.body.style.backgroundColor = selectedColor;
  } else {
    alert("Velg en farge!!!");
  }
};

// Overføre og huske farge

const targetDiv1 = document.getElementById("targetDiv1");
const targetDiv2 = document.getElementById("targetDiv2");

targetDiv1.onclick = () => selectTargetDiv(targetDiv1);
targetDiv2.onclick = () => selectTargetDiv(targetDiv2);

function selectTargetDiv(targetDivElement) {
  // fjerner valget av en klikket div
  targetDiv1.classList.remove("selected");
  targetDiv2.classList.remove("selected");

  // valg til klikket div
  targetDivElement.classList.add("selected");

  // bakgrunnsfargen til det valgte feltet
  if (selectedColor) {
    targetDivElement.style.backgroundColor = selectedColor;
  }
}
