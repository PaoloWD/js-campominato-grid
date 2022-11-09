const btnSbmit = document.querySelector(".btn-primary");
const btnReset = document.querySelector(".btn-danger");
const select = document.querySelector("select");

btnSbmit.addEventListener("click", function () {
  const grilContainer = document.querySelector(".gril-container");
  grilContainer.innerHTML = "";
  //.options[select.selectedIndex]
  const difficulty = select.value;
  const parseDifficulty = parseInt(difficulty);
  const counter = parseDifficulty * parseDifficulty;

  for (i = 1; i <= counter; i++) {
    const cell = document.createElement("div");
    cell.classList.add("square");

    cell.style.flexBasis = 100 / parseDifficulty + "%";
    cell.innerHTML = i;
    cell.addEventListener("click", function () {
      cell.classList.toggle("bg-primary");
      const numCell = parseInt(this.textContent);
      console.log(numCell);
    });
    grilContainer.append(cell);
  }
});

btnReset.addEventListener("click", function () {
  const resetCell = document.querySelectorAll(".square");
  resetCell.forEach((square) => {
    square.classList.remove("bg-primary");
  });
});
