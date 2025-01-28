let isShiftActive = false;

function updateTextField(element) {
  var textField = document.getElementById("textField");
  let keyValue = element.innerHTML;
  if (isShiftActive) {
    keyValue = keyValue.toUpperCase();
    deactivateShift();
  } else {
    keyValue = keyValue.toLowerCase();
  }
  textField.value += keyValue;
}

function addSpace() {
  var textField = document.getElementById("textField");
  textField.value += " ";
}

function backspace() {
  var textField = document.getElementById("textField");
  textField.value = textField.value.slice(0, -1);
}

function clearText() {
  document.getElementById("textField").value = "";
}

function toggleShift() {
  isShiftActive = !isShiftActive;
  const shiftKey = document.querySelector(".key.shift");
  shiftKey.style.backgroundColor = isShiftActive ? "#66d" : "#88f";
}

function deactivateShift() {
  isShiftActive = false;
  const shiftKey = document.querySelector(".key.shift");
  shiftKey.style.backgroundColor = "#88f";
}
