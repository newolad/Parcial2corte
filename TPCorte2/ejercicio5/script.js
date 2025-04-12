document.getElementById("aCelsius").addEventListener("click", () => {
    const f = parseFloat(document.getElementById("temperatura").value);
    const c = ((f - 32) * 5) / 9;
    document.getElementById("resultado").textContent = `${c.toFixed(2)} °C`;
  });
  
  document.getElementById("aFahrenheit").addEventListener("click", () => {
    const c = parseFloat(document.getElementById("temperatura").value);
    const f = (c * 9) / 5 + 32;
    document.getElementById("resultado").textContent = `${f.toFixed(2)} °F`;
  });