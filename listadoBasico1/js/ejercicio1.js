/**
Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número
entre el 1 y el 100. Mostrará un mensaje:
a. Para indicar si has acertado (en una nueva ventana)
b. Para indicar si la solución es mayor o es menor.
@author Raul Moreno Povedano
*/
window.onload = function() {
  document.getElementById("button").onclick = comprobar;
}
function nuevoJuego(){
  intentos=0;
  mensajeErr="";
  mensajeInfo="";
  aleatorio=Math.ceil(Math.random()*100);
  console.log(aleatorio);
  document.getElementById('numero').value="";
  document.getElementById('mensaje').innerHTML=mensajeInfo;
  document.getElementById('error').innerHTML=mensajeInfo;
  document.getElementById("intentos").innerHTML = intentos;
}
function comprobar(){
  var numero=document.getElementById('numero').value;
  if(numero==""){
    var mensajeErr="Campo no puedo estar vacío";
    document.getElementById('error').innerHTML=mensajeErr;
  }else{
    intentos++;
    if(numero<aleatorio){
      mensajeErr="";
      mensajeInfo="El número que buscas es mayor";
      document.getElementById('mensaje').innerHTML=mensajeInfo;
      document.getElementById('intentos').innerHTML=intentos;
      document.getElementById('error').innerHTML=mensajeErr;
    }
    if(numero>aleatorio){
      mensajeErr="";
      mensajeInfo="El número que buscas es menor";
      document.getElementById('mensaje').innerHTML=mensajeInfo;
      document.getElementById('intentos').innerHTML=intentos;
      document.getElementById('error').innerHTML=mensajeErr;
    }if(numero==aleatorio){
      acertar();

    }
  }

}
function acertar(){
  nuevaVentana=window.open();
  nuevaVentana.document.write("<script type='text/javascript' src='js/ejercicio1.js'></script>");
  nuevaVentana.document.write("ACERTASTE!");
  nuevaVentana.document.write("<br>Volver a jugar??<br>");
  nuevaVentana.document.write("<input type='button' id='si' value='Si' onClick='aceptar()'>");
  nuevaVentana.document.write("<input type='button' id='no' value='No' onClick='rechazar()'>");
}
function aceptar (){
  window.parent.location.reload();
  window.close();

}
function rechazar(){
  document.write("<br>Adiós");
  setTimeout(function(){window.close();},1000);
}
