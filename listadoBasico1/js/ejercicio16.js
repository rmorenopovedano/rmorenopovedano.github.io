/*
. Implementa Pirámide que mediante un bucle for visualice una pirámide del siguiente
tipo:
1
22
333
4444
55555
666666
7777777
88888888
999999999
0000000000
*/
document.getElementById("button").addEventListener("click", function(){
 Piramide();
});
function Piramide(){
  var mensaje=document.getElementById('informacion');
  for (var i = 1; i < 11; i++) {
    var cadena="";
    for (var j = 0; j < (i); j++) {
      if(i==10)cadena+=0;
      else cadena+=i;
    }  mensaje.innerHTML+=cadena+"<br>";
  }
}
