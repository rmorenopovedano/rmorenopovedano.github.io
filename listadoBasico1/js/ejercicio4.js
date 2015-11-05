/*
 Implenta NumeroPrimo que pida un número e indique si es primo o no.
 */
 window.onload=function(){
   document.getElementById('button').onclick=NumeroPrimo;
 }
 function NumeroPrimo(){
   var numero=document.getElementById('numero').value;
   if(validar(numero)){
     for(var i = 2; i < numero; i++) {
       if(numero % i == 0){
        document.getElementById('informacion').innerHTML="No es primo";
        return false;
       }
    }
    document.getElementById('informacion').innerHTML="Es primo";
  }
}

function validar(numero){
  if(numero.trim()=="")
  return false;
  else {
    return true;
  }
}
