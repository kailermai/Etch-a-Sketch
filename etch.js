let answer;

const container = document.querySelector(".container");

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
});
