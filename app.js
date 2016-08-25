	var numero;
	numero = parseInt(prompt("Escribe un número: "));

		if (numero % 2 != 0) {
			window.alert("impar!");
}
else if (numero % 2 == 0 && numero>2 && numero<5) {
	window.alert("Good!");
}
else if(numero % 2 == 0 && numero>6 && numero<20){
	window.alert("Great!");
}
else {
	window.alert("perfect!");
}

