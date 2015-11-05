/*
Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos números
primos existen entre el 1 y dicho número
 */
 window.onload=function(){
   document.getElementById('button').onclick=comprobarNumeroPrimoEnSecuencia;
 }

 function esPrimo(n){
 	var esPrimo = true;
 	for (var i = 2; i <= (n/2); i++) {
 		if (n%i == 0) {
 			esPrimo = false;
 		};
 	};
 	return esPrimo;
 };

function comprobarNumeroPrimoEnSecuencia(){
  var primos=0;
  var mensajeInfo="";
	var numero = document.getElementById("numero").value;
  if(validar(numero)){
    for (var i = 2; i < numero; i++) {
      if (esPrimo(i)) {
        primos++;
      }
    }
    if (primos > 0) {
      mensajeInfo = "Entre el 1 y el "+ numero +" hay "+primos+ " numeros primos";
    } else {
      mensajeInfo = "No hay ningún número primo entre 1 y "+numero;
    }
      document.getElementById("informacion").innerHTML = mensajeInfo;
  }
  }


function validar(numero){
  if(numero.trim()=="")
  return false;
  else {
    return true;
  }
}
