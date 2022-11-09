const btnSbmit = document.querySelector(".btn-primary");
const select = document.querySelector("select");

btnSbmit.addEventListener("click", function () {
  const grilContainer = document.querySelector(".gril-container");
  grilContainer.innerHTML = "";
  let difficulty = select.options[select.selectedIndex].value;
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
