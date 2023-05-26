const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("box");

  container.append(div);
}

const divs = container.querySelectorAll("div");

const colorIn = function () {
  this.classList.add("colored");
};

divs.forEach((div) => {
  div.addEventListener("mouseover", colorIn);
});

console.log(divs);
