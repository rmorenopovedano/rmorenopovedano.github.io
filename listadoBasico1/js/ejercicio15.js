/*
Implementa MuestraDelUnoAlN que pida un número entero y que muestre la
secuencia del 1 al número indicado. En caso de no poder generarse la secuencia
(menor que 1), que lo indique
*/
document.getElementById("button").addEventListener("click", function(){
    MuestraDelUnoAlN();
});
function MuestraDelUnoAlN(){
  var numero=document.getElementById('numero').value;
  if(validar(numero)){
    if(numero<1)
    document.getElementById('error').innerHTML="Debes introducir un número mayor que 1";
    else{
      document.getElementById('error').innerHTML="";
      for (var i = 1; i <= numero; i++) {
      document.getElementById('informacion').innerHTML+=i+" - ";
      }
    }
  }
}
function validar(numero){
  if(numero.trim()!="") return true;
  else {
    document.getElementById('error').innerHTML="Campo no puede estar vacío";
    return false;
  }
}
