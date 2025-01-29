let isFlashlightOn = false;

function toggleFlashlight() {
  const body = document.body;
  const flashlight = document.getElementById("flashlight");
  const message = document.getElementById("message");

  if (isFlashlightOn) {
    body.classList.remove("flashlight-on");
    message.textContent = "Flashlight is off";
  } else {
    body.classList.add("flashlight-on");
    message.textContent = "Flashlight is on";
  }

  isFlashlightOn = !isFlashlightOn;
}
