document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje");
  
    if (nombre && email) {
      mensaje.textContent = "Formulario enviado correctamente";
      mensaje.style.color = "green";
    } else {
      mensaje.textContent = "Por favor, completa todos los campos";
      mensaje.style.color = "red";
    }
  });