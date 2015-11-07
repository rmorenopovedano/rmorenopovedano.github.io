/*
Implementa DeNumericoAtexto que solicite un número del 0 al 99 y lo muestre
escrito. Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Que
sea lo más eficiente posibleImplementa MultiplicaImpares que multiplique los 20
primeros números impares y muestre el resultado en pantalla.
*/

  document.getElementById("button").addEventListener("click", function(){
      DeNumericoAtexto();
  });

function DeNumericoAtexto(){
  var numero=document.getElementById('numero').value;
  var numeroEnLetra="";
  if(validarNumero(numero)){
    var mensaje="";
    document.getElementById('error').innerHTML=mensaje;
    if(numero.length == 1){
		switch (numero.charAt(0)){
			case "0":
				numeroEnLetra = "cero";
				break;
			case "1":
				numeroEnLetra = "uno";
				break;
			case "2":
				numeroEnLetra = "dos";
				break;
			case "3":
				numeroEnLetra = "tres";
				break;
			case "4":
				numeroEnLetra = "cuatro";
				break;
			case "5":
				numeroEnLetra = "cinco";
				break;
			case "6":
				numeroEnLetra = "seis";
				break;
			case "7":
				numeroEnLetra = "siete";
				break;
			case "8":
				numeroEnLetra = "ocho";
				break;
			case "9":
				numeroEnLetra = "nueve";
				break;
		};
	} else if ((numero.length == 2) && (numero.charAt(0) == "1")){
		switch(numero){
			case "10":
				numeroEnLetra = "diez";
				break;
			case "11":
				numeroEnLetra = "once";
				break;
			case "12":
				numeroEnLetra = "doce";
				break;
			case "13":
				numeroEnLetra = "trece";
				break;
			case "14":
				numeroEnLetra = "catorce";
				break;
			case "15":
				numeroEnLetra = "quince";
				break;
			case "16":
				numeroEnLetra = "dieciséis";
				break;
			case "17":
				numeroEnLetra = "diecisiete";
				break;
			case "18":
				numeroEnLetra = "dieciocho";
				break;
			case "19":
				numeroEnLetra = "diecinueve";
				break;
		}
	} else if ((numero.length == 2) && (numero.charAt(0) == "2")){
		n = "veint";
		switch (numero){
			case "20":
				numeroEnLetra = n+"e";
				break;
			case "21":
				numeroEnLetra = n+"iuno";
				break;
			case "22":
				numeroEnLetra = n+"idos";
				break;
			case "23":
				numeroEnLetra = n+"itres";
				break;
			case "24":
				numeroEnLetra = n+"icuatro";
				break;
			case "25":
				numeroEnLetra = n+"icinco";
				break;
			case "26":
				numeroEnLetra = n+"iseis";
				break;
			case "27":
				numeroEnLetra = n+"isiete";
				break;
			case "28":
				numeroEnLetra = n+"iocho";
				break;
			case "29":
				numeroEnLetra = n+"inueve";
				break;
		};
	} else if (numero.length == 2){
		switch(numero.charAt(0)){
			case "3":
				n = "treint";
				break;
			case "4":
				n = "cuarent";
				break;
			case "5":
				n = "cincuent";
				break;
			case "6":
				n = "sesent";
				break;
			case "7":
				n = "setent";
				break;
			case "8":
				n = "ochent";
				break;
			case "9":
				n = "novent";
				break;
		};
		switch(numero.charAt(1)){
			case "0":
				numeroEnLetra = n + "a";
				break;
			case "1":
				numeroEnLetra = n + "a y uno";
				break;
			case "2":
				numeroEnLetra = n + "a y dos";
				break;
			case "3":
				numeroEnLetra = n + "a y tres";
				break;
			case "4":
				numeroEnLetra = n + "a y cuatro";
				break;
			case "5":
				numeroEnLetra = n + "a y cinco";
				break;
			case "6":
				numeroEnLetra = n + "a y seis";
				break;
			case "7":
				numeroEnLetra = n + "a y siete";
				break;
			case "8":
				numeroEnLetra = n + "a y ocho";
				break;
			case "9":
				numeroEnLetra = n + "a y nueve";
				break;
		};
	};

	// Mostramos al usuario:
	document.getElementById("informacion").innerHTML = numeroEnLetra;
};
  }
function validarNumero(numero){
  if(numero.trim()=="" || numero<0 || numero>99){
    var mensaje="Campo no válido";
    document.getElementById('error').innerHTML=mensaje;
    return false;
  }
  else return true;
}
