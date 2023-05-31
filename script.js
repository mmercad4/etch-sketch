const container = document.querySelector(".container");
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

createGrid(50);

const divs = container.querySelectorAll("div");

const colorIn = function () {
  this.classList.add("colored");
};

divs.forEach((div) => {
  div.addEventListener("mouseover", colorIn);
});

console.log(divs);
