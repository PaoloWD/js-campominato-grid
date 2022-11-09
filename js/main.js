const btnSbmit = document.querySelector(".btn-primary");
const btnReset = document.querySelector(".btn-danger");
const select = document.querySelector("select");
const countdown = document.querySelector(".fw-bold");
console.log(countdown);
let death = 3;

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
  for (i = 1; i <= parseDifficulty; i++) {
    const positionBombs = randomNum(1, counter);

    const bombs = document.querySelector(
      `.gril-container :nth-child(${positionBombs})`
    );
    bombs.addEventListener("click", function () {
      bombs.classList.add("bg-danger");
      bombs.classList.remove("bg-primary");
      if (document.getElementsByClassName("bg-danger").length) {
        death--;
        countdown.innerHTML = `VITE RIMASTE : ${death}`;
        if (death === 0) {
          alert("Hai finito le vite sei morto");
        }
      }
    });
  }
});

btnReset.addEventListener("click", function () {
  const resetCell = document.querySelectorAll(".square");
  death = 3;
  countdown.innerHTML = `VITE RIMASTE : ${death}`;
  resetCell.forEach((square) => {
    square.classList.remove("bg-primary");
    square.classList.remove("bg-danger");
  });
});

function randomNum(min, max) {
  return Math.floor(Math.random() * (1 + max - min)) + min;
}
