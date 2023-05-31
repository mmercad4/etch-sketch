const container = document.querySelector(".container");
const generateButton = document.querySelector("#generateButton");

let gridSize = 16;

const createGrid = function (size) {
  container.innerHTML = "";
  gridSize = size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    container.append(div);

    div.style.height = `${960 / size - 2}px`;
    div.style.width = `${960 / size - 2}px`;
  }
  const divs = container.querySelectorAll("div");
  divs.forEach((div) => {
    div.addEventListener("mouseover", colorIn);
  });
};

const darkenRGB = function (rgb, percentage) {
  const values = rgb.match(/\d+/g);
  if (!values) return;
  const r = parseInt(values[0]);
  const g = parseInt(values[1]);
  const b = parseInt(values[2]);

  console.log(r);

  const darkenedR = Math.round(r * (1 - percentage / 100));
  const darkenedG = Math.round(g * (1 - percentage / 100));
  const darkenedB = Math.round(b * (1 - percentage / 100));

  const darkenedRGB = `rgb(${darkenedR}, ${darkenedG}, ${darkenedB})`;

  return darkenedRGB;
};

const colorIn = function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let color;

  if (this.classList[1] && this.style.backgroundColor !== "rgb(1,1,1)") {
    console.log();
    color = darkenRGB(this.style.backgroundColor, 50);
    console.log(this.style.backgroundColor);
    console.log("DOES EXIST");
  } else {
    color = randomColor;
  }

  this.style.backgroundColor = color;

  this.classList.add("colored");
};

createGrid(16);

generateButton.addEventListener("click", function () {
  const gridSizeInput = document.querySelector("#gridSizeInput");
  gridSize = parseInt(gridSizeInput.value);

  if (gridSize > 100) return;

  createGrid(gridSize);
});
