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
};

const colorIn = function () {
  this.classList.add("colored");
};

createGrid(16);

const divs = container.querySelectorAll("div");
divs.forEach((div) => {
  div.addEventListener("mouseover", colorIn);
});

generateButton.addEventListener("click", function () {
  const gridSizeInput = document.querySelector("#gridSizeInput");
  gridSize = parseInt(gridSizeInput.value);

  if (gridSize > 100) return;

  createGrid(gridSize);

  const divs = container.querySelectorAll("div");
  divs.forEach((div) => {
    div.addEventListener("mouseover", colorIn);
  });
});
