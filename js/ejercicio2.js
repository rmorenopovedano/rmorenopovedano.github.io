/*Implementa DeSieteEnSiete que escriba los números del 100 al 0 de 7 en siete
*/
window.onload = function() {
  document.getElementById("button").onclick = DeSieteEnSiete;
}
function DeSieteEnSiete(){
  var cadena="";
  for (var i = 100; i>0; i-=7) {
    cadena+=i+" - ";
  }
  document.getElementById('informacion').innerHTML=cadena;
}
