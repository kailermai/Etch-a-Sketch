const container = document.querySelector(".container");

for (let i = 0; i < 257; i++) {
  const sqdiv = document.createElement("div");
  sqdiv.className = "square";
  container.appendChild(sqdiv);
}
