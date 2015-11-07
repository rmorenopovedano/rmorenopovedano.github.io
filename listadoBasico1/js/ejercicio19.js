/*
Implementa PorLineasDos que visualice los números del 0 al 100 separados por comas.
Cada múltiplo de 7 o finalizado en 7 ha de comenzar en una línea nueva.
*/
document.getElementById("button").addEventListener("click", function(){
 PorLineas();
});
function PorLineas(){
  for (var i = 0; i < 101; i++) {
    if(i%7==0 || i.toString().match(/[\d]7/) ){
      document.getElementById('informacion').innerHTML+="<br>";
    }
     document.getElementById('informacion').innerHTML+=i+",";
  }
}
