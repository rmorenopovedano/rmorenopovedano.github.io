/*
Implementa ProductoPotencias que calcule y visualice el producto de las potencias de
2 entre 0 y 10
*/
document.getElementById("button").addEventListener("click", function(){
    ProductoPotencias();
});
function ProductoPotencias(){
var potencia=0;
var resultado=1;
  for (var i = 0; i < 11; i++) {
      potencia = Math.pow(2,i)
      document.getElementById('potencias').innerHTML+="2^"+i+"*";
      resultado*=potencia;
  }document.getElementById('resultado').innerHTML=" = "+resultado;
}
