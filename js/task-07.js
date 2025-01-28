let isFlashlightOn = false;

function toggleFlashlight() {
  const body = document.body;
  const flashlight = document.getElementById("flashlight");

  if (isFlashlightOn) {
    body.classList.remove("flashlight-on");
  } else {
    body.classList.add("flashlight-on");
  }

  isFlashlightOn = !isFlashlightOn;
}
