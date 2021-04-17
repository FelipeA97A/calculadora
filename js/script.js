// Declaración de variables globales para poder mantener datos entre funciones.
var num1;
var num2;
var operando;
var pantalla = document.getElementById("resultado");
var historial;

// Esta función detecta cuándo se ha pulsado una tecla numérica para mostrar su valor por pantalla.
function escribirNumero(numero) {	
	pantalla.textContent = pantalla.textContent + numero;
	document.getElementById("resultado").innerHTML = pantalla.textContent;
}

// Esta función elimina los números que se muestran por pantalla.
function del() {
	document.getElementById("resultado").innerHTML = "";	
	document.getElementById("historial").innerHTML = "";
}

// Esta funcion opera los dos numeros que se han introducido.
function realizarOperacion() {
	//console.log(num1);
	var num2 = pantalla.textContent;
	var resultado = 0;
		switch (operando) {
			case "+":
				resultado = parseFloat(num1, 10) + parseFloat(num2, 10);
				mostrarHistorial(num2);
			break;
			case "-":
				resultado = parseFloat(num1, 10) - parseFloat(num2, 10);
				mostrarHistorial(num2);
			break;
			case "*":
				resultado = parseFloat(num1, 10) * parseFloat(num2, 10);
				mostrarHistorial(num2);
			break;
			case "/":
				resultado = parseFloat(num1, 10) / parseFloat(num2, 10);
				mostrarHistorial(num2);
			break;
		}
	pantalla.textContent = resultado;
	num1 = 0;
	operando = "";
}

// Esta función muestra el historial de la operación que se está realizando.
function mostrarHistorial(modo) {
	if (modo != "x") {
		document.getElementById("historial").innerHTML = historial + " " + modo + " = ";
	} else {
		historial = num1 + " " + operando;
		document.getElementById("historial").innerHTML = historial;
	}
}

// Esta función recibe el tipo de operación a realizar para poder operar con ella.
function operacion(operando_) {
		operando = operando_;
		num1 = pantalla.textContent;
		del();
		mostrarHistorial("x");
}