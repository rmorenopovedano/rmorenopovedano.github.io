/*
Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a
mayor.
*/
window.onload=function(){
  document.getElementById('button').onclick=OrdenaTres;
}
function OrdenaTres(){
  var mensaje="";
  var n1=document.getElementById('numero1').value;
  var n2=document.getElementById('numero2').value;
  var n3=document.getElementById('numero3').value;
  if(validar(n1,n2,n3)){
    if (n1 == n2 && n1 == n3){
   document.getElementById('informacion').innerHTML="Numero 1, Numero 2 y Numero 3 son iguales!";
   }
   else{
      if (n1 > n2){
         if (n1 > n3){
            document.getElementById('informacion').innerHTML=n1+ " es el Mayor de los 3";
            }
            else{
               document.getElementById('informacion').innerHTML=n3 + " es el Mayor de los 3";
               }
      }
      else{
         if(n1 <= n2){
            if (n2 > n3){
               document.getElementById('informacion').innerHTML=n2+" es el Mayor de los 3";
               }
               else{
                  document.getElementById('informacion').innerHTML=n3+" es el Mayor de los 3";
                  }
            }
         }
   }

  }

}
function validar(n1,n2,n3){
  if(n1.trim()=="" || n2.trim()=="" || n3.trim()=="")
    return false;
  else {
    return true;
  }
}
