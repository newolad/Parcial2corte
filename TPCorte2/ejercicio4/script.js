const btnAgregar = document.getElementById("btnAgregar");
const nuevaTarea = document.getElementById("nuevaTarea");
const listaTareas = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", () => {
  if (nuevaTarea.value !== "") {
    const li = document.createElement("li");
    li.textContent = nuevaTarea.value;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      listaTareas.removeChild(li);
    });
    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);
    nuevaTarea.value = "";
  }
});