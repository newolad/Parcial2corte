const imagen = document.getElementById("imagen");
document.getElementById("btnCambiar").addEventListener("click", () => {
  imagen.src = imagen.src.includes("imagen1.jpg") ? "imagen2.jpg" : "imagen1.jpg";
});