/*Implementa CerosYUnos que lea una secuencia de ceros y unos. Mostrará el número
de ceros de la secuencia. Dejará de leer cuando el usuario introduzca el número 2.
*/
document.getElementById("button").addEventListener("click", function(){
    CerosYUnos();
});
var arrayCeros=new Array();
function CerosYUnos(){
  var numero=document.getElementById('numero').value;
  if(validar(numero)){
        document.getElementById('error').innerHTML="";
    if(numero==0){
      arrayCeros.push(numero);
      document.getElementById('ceros').innerHTML=arrayCeros.length;
    }
      document.getElementById('numerosIntroducidos').innerHTML+=numero;
  }
}
function validar(numero){
  if(numero.length!=1 || numero.trim()==" " || numero.trim()<0 || numero.trim()>1){
    document.getElementById('error').innerHTML="Sólo son válidos 0 y 1";
    return false;
  }
  else return true;
}
