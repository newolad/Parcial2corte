const crearElemento = document.getElementById("crearElemento");
const eliminarElemento = document.getElementById("eliminarElemento");
const container = document.getElementById("container");

if(crearElemento!=null && eliminarElemento!=null){
    console.log("se encontraron los elementos correctamente");
};

crearElemento.addEventListener("click", function(){

const nuevoElemento = document.createElement('div');

nuevoElemento.classList.add("Cuadrado");

container.appendChild(nuevoElemento);

});

eliminarElemento.addEventListener("click", function(){

const cuadrado = document.querySelector('.cuadrado');

container.removeChild(cuadrado);

});