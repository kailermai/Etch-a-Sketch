let answer;
let sizesq;

const container = document.querySelector(".container");

//Function which removes previously created grid and creates a new grid
function createGrid(num) {
  //Removes all previous squares
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  //Adds in new squares
  const totalnum = num * num;
  for (let i = 0; i < totalnum + 1; i++) {
    const sqdiv = document.createElement("div");
    sqdiv.className = "newSquare";
    sqdiv.style.height = sizesq.toString() + "px";
    sqdiv.style.width = sizesq.toString() + "px";
    container.appendChild(sqdiv);
  }

  const newSquares = document.querySelectorAll(".newSquare");
  newSquares.forEach((newSquare) => {
    newSquare.addEventListener("mousemove", () => {
      newSquare.style.backgroundColor = "black";
    });
  });
}

//Creating n numbers of boxes
for (let i = 0; i < 257; i++) {
  const sqdiv = document.createElement("div");
  sqdiv.className = "square";
  container.appendChild(sqdiv);
}

//Changes the colour of the square when hovered over
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mousemove", () => {
    square.style.backgroundColor = "black";
  });
});

//Button that allows the user to input and change the grid
const btn = document.querySelector("button");
btn.textContent = "Click me to adjust the grid!";
btn.addEventListener("click", () => {
  //Check for non number inputs by the user
  do {
    answer = prompt(
      "Number of squares per side for the new grid:\nEnter a number from 1 to 100 only."
    );
  } while (isNaN(answer) || Number(answer) <= 0 || Number(answer) > 100);
  sizesq = Math.round((800.0 / answer) * 1000) / 1000;
  createGrid(answer);
});
