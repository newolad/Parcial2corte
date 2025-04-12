let contador = 0;

document.getElementById("btnIncrementar");
btnIncrementar.addEventListener("click", () => {
  contador++;
  document.getElementById("contador").textContent = contador;
});