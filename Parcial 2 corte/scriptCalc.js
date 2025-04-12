function calcular(operacion) {
const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
const resultado = document.getElementById('resultado');

if (isNaN(num1) || isNaN(num2)) {
resultado.textContent = "Por favor ingresa ambos números.";
return;
}

let res;
switch (operacion) {
case '+':
res = num1 + num2;
break;
case '-':
res = num1 - num2;
break;
case '*':
res = num1 * num2;
break;
case '/':
res = num2 !== 0 ? num1 / num2 : "Error: división por cero";
break;
default:
    res = "Operación inválida";
}

resultado.textContent = `Resultado: ${res}`;
}
  
