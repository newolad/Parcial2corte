const numeroSecreto = Math.floor(Math.random() * 100) + 1;
document.getElementById("btnAdivinar").addEventListener("click", () => {
  const intento = parseInt(document.getElementById("intento").value);
  const resultado = document.getElementById("resultado");

  if (intento < numeroSecreto) {
    resultado.textContent = "Demasiado bajo";
  } else if (intento > numeroSecreto) {
    resultado.textContent = "Demasiado alto";
  } else {
    resultado.textContent = "¡Correcto! Has adivinado el número.";
  }
});