/*
Implementa Pirámide que mediante un bucle for visualice una pirámide del siguiente
tipo:
1
12
123
1234
12345
123456
1234567
12345678
123456789
1234567890
*/
document.getElementById("button").addEventListener("click", function(){
 Piramide();
});
function Piramide(){
  var mensaje=document.getElementById('informacion');
  for (var i = 1; i < 11; i++) {
    var cadena="";
    for (var j = 1; j < (i+1); j++) {
      if(j==10) cadena += 0;
      else cadena+=j;
    }  mensaje.innerHTML+=cadena+"<br>";
  }
}
