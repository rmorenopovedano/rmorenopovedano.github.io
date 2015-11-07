/*
Implementa MediaPositivos que calcule la media de una serie de números positivos,
introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0.
*/
document.getElementById("media").addEventListener("click", function(){
    MediaPositivos();
});
document.getElementById("annadir").addEventListener("click", function(){
    AnnadirNumero();
});
var arrayNumeros=new Array();
function MediaPositivos(){
  var suma=0;
  var media=0;
  for (var i = 0; i < arrayNumeros.length; i++) {
    suma+=parseInt(arrayNumeros[i]);
  }
  media=suma/arrayNumeros.length;
  document.getElementById('informacion').innerHTML=media;
}
function AnnadirNumero(){
  var numero=document.getElementById('numero').value;
  if(validar(numero)){
    document.getElementById('error').innerHTML="";
    if(numero==0) MediaPositivos();
    else arrayNumeros.push(numero);
    document.getElementById('numerosIntroducidos').innerHTML=arrayNumeros+",";
    }

  }
function validar(numero){
  if(numero.trim()!="") return true;
  else {
    document.getElementById('error').innerHTML="Campo no puede estar vacío";
    return false;
  }
}
