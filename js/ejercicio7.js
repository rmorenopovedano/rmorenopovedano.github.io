/*
Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
a. Cuántas cifras tiene (7 cifras)
b. Lo muestre del revés
*/
window.onload=function(){
  document.getElementById('button').onclick=Decena;
}
function Decena(){
  var mensajeErr="";
  var numero=document.getElementById('numero').value;
  if(validar(numero)){
    mensajeErr="";
    document.getElementById('error').innerHTML=mensajeErr;
    if(esDecimal(numero)){
      document.getElementById('cifras').innerHTML=numero.length-1;
    }else {
      document.getElementById('cifras').innerHTML=numero.length;
    }
      var numInvertido = "";
    	for (var i = (numero.length-1); i >= 0; i--) {
    		numInvertido += numero.charAt(i);
    	}
      document.getElementById('reves').innerHTML=numInvertido;
  }else {
    mensajeErr="Número no válido";
    document.getElementById('error').innerHTML=mensajeErr;
  }
}
function validar(numero){
  if(numero.trim()<1 || numero.trim()>10 || numero.trim()=="")
  return false;
  else return true;
}
function esDecimal(numero){
  if(numero.match(/[.,]/))
  return true;
  else return false;
}
