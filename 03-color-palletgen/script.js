const colorFormat = document.getElementById("color-format");
const palletMode = document.getElementById("palette-mode");
const cta = document.getElementById("generate-btn");
const palletContainer = document.getElementById("color-pallet");

function generateRgb(tone) {
  let min, max;
  if (tone === "light") {
    min = 150;
    max = 255;
  }

  if (tone === "dark") {
    min = 0;
    max = 150;
  }

  const r = Math.floor(Math.random() * (max - min) + min);
  const g = Math.floor(Math.random() * (max - min) + min);
  const b = Math.floor(Math.random() * (max - min) + min);

  return {r, g, b};
}

function convertToHex(r, g, b) {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function generatePallet() {
  palletContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const {r, g, b} = generateRgb(palletMode.value);
    const pallet = document.createElement("div");
    pallet.className = "pallet";
    pallet.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    colorFormat.value === "hex"
      ? (pallet.innerText = convertToHex(r, g, b))
      : (pallet.innerText = `rgb(${r}, ${g}, ${b})`);

    palletContainer.append(pallet);
  }
}

cta.addEventListener("click", generatePallet);

generatePallet();
