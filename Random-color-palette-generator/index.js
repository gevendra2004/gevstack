const container = document.querySelector(".container");
const refresh = document.querySelector(".refresh");
const maxPaletteBoxes = 32;

const generatePalette = () => {
  container.innerHTML = "";
  for (let i = 0; i < maxPaletteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style = "background : ${randomHex};"></div>
    <span class="hex-value">${randomHex}</span>`;

    color.addEventListener("click", () => copyColor(color, randomHex));

    container.appendChild(color);
  }
};
generatePalette();

const copyColor = (element, hexVal) => {
  const colorElement = element.querySelector(".hex-value");
  navigator.clipboard.writeText(hexVal).then(() => {
    colorElement.innerText = "Copied";
    setTimeout(() => (colorElement.innerText = hexVal), 1000);
  });
};

refresh.addEventListener("click", generatePalette);