const coin = document.getElementById("coin");
const headCoin = document.getElementById("head-coin");
const tailCoin = document.getElementById("tail-coin");
const shadowCoin = document.getElementById("shadow-coin");
const flipBtn = document.getElementById("flipBtn");
const resultText = document.getElementById("result");

let rotation = 0;

flipBtn.addEventListener("click", () => {
  const isHead = Math.random() < 0.5;

  coin.style.transform = "rotateY(0deg)";
  void coin.offsetWidth;

  rotation += isHead ? 1800 : 1980;

  // Flip + lift
  coin.style.transform = `rotateY(${rotation}deg) translateY(-20px)`;
  shadowCoin.style.transform = "scale(0.7)";
  shadowCoin.style.opacity = "0.4";

  resultText.textContent = "Flipping...";

  setTimeout(() => {
    // Land
    coin.style.transform = `rotateY(${rotation}deg) translateY(0px)`;
    shadowCoin.style.transform = "scale(1)";
    shadowCoin.style.opacity = "1";

    resultText.textContent = isHead ? "Heads" : "Tails";
  }, 1000);
})