/*. Implementa CalculaMedia que pida números hasta que se introduzca uno negativo.
Entonces, que muestre la media
*/
document.getElementById("annadir").addEventListener("click", function(){
    AnnadirNumero();
});
var arrayNumeros=new Array();
function AnnadirNumero(){
  var numero=document.getElementById('numero').value;
  if(validar(numero)){
    var suma=0;
    var media=0;
    for (var i = 0; i < arrayNumeros.length; i++) {
      suma+=parseInt(arrayNumeros[i]);
    }
    media=suma/arrayNumeros.length;
    document.getElementById('error').innerHTML="Dame otro número";
    if(numero<0){
      document.getElementById('error').innerHTML="";
      document.getElementById('informacion').innerHTML=media;
    }
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
