const coin = document.getElementById("coin");
const shadowCoin = document.getElementById("shadow-coin");
const flipBtn = document.getElementById("flipBtn");
const resultText = document.getElementById("result");

let isFlipping = false;
let currentRotation = 0;
let currentFace = "Heads";

flipBtn.addEventListener("click", () => {
  if (isFlipping) return;
  isFlipping = true;

  const isHead = Math.random() < 0.5;
  const nextFace = isHead ? "Heads" : "Tails";

  resultText.textContent = "Flipping...";

  const spins = 5 * 360;
  const needsFlip = currentFace !== nextFace;
  const faceRotation = needsFlip ? 180 : 0;

  currentRotation += spins + faceRotation;

  // Force repaint
  coin.style.transform = `rotateY(${currentRotation - spins - faceRotation}deg)`;
  void coin.offsetWidth;

  // Flip + lift
  coin.style.transform = `rotateY(${currentRotation}deg) translateY(-20px)`;
  shadowCoin.style.transform = "scale(0.7)";
  shadowCoin.style.opacity = "0.4";

  const onFlipEnd = (e) => {
    if (e.propertyName !== "transform") return;

    // Land
    coin.style.transform = `rotateY(${currentRotation}deg) translateY(0px)`;
    shadowCoin.style.transform = "scale(1)";
    shadowCoin.style.opacity = "1";

    currentFace = nextFace;
    resultText.textContent = nextFace;

    coin.removeEventListener("transitionend", onFlipEnd);
    isFlipping = false;
  };

  coin.addEventListener("transitionend", onFlipEnd);
});