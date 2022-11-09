const btnSbmit = document.querySelector(".btn-primary");
const select = document.querySelector("select");

console.log(select);

btnSbmit.addEventListener("click", function () {
  const grilContainer = document.querySelector(".gril-container");
  grilContainer.innerHTML = "";
  let difficulty = select.options[select.selectedIndex].value;
  console.log(difficulty);
  if (difficulty === "1") {
    for (i = 1; i <= 100; i++) {
      const cell = document.createElement("div");
      cell.classList.add("square");

      cell.style.flexBasis = 100 / 10 + "%";
      cell.innerHTML = i;
      cell.addEventListener("click", function () {
        cell.classList.toggle("bg-primary");
        const numCell = parseInt(this.textContent);
        console.log(numCell);
      });
      grilContainer.append(cell);
    }
  } else if (difficulty === "2") {
    for (i = 1; i <= 81; i++) {
      const cell = document.createElement("div");
      cell.classList.add("square");

      cell.style.flexBasis = 100 / 9 + "%";
      cell.innerHTML = i;
      cell.addEventListener("click", function () {
        cell.classList.toggle("bg-primary");
        const numCell = parseInt(this.textContent);
        console.log(numCell);
      });
      grilContainer.append(cell);
    }
  } else {
    for (i = 1; i <= 49; i++) {
      const cell = document.createElement("div");
      cell.classList.add("square");

      cell.style.flexBasis = 100 / 7 + "%";
      cell.innerHTML = i;
      cell.addEventListener("click", function () {
        cell.classList.toggle("bg-primary");
        const numCell = parseInt(this.textContent);
        console.log(numCell);
      });
      grilContainer.append(cell);
    }
  }
});
