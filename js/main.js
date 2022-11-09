const btnSbmit = document.querySelector(".btn-primary");

btnSbmit.addEventListener("click", function () {
  const grilContainer = document.querySelector(".gril-container");

  for (i = 1; i <= 100; i++) {
    const cel = document.createElement("div");
    cel.classList.add("square");

    cel.style.flexBasis = 100 / 10 + "%";
    cel.innerHTML = i;
    cel.addEventListener("click", function () {
      cel.classList.toggle("bg-primary");
      const numCel = parseInt(this.textContent);
      console.log(numCel);
    });
    grilContainer.append(cel);
  }
});
