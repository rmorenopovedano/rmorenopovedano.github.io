/*Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de
5.*/
window.onload=function(){
  document.getElementById('button').onclick=MultiplosDeCinco;
}
function MultiplosDeCinco(){
  var multiplo= new Array();
  var formulario=document.forms.formulario;
  for (var i = 0; i < (formulario.length-1); i++) {
    document.getElementById('error'+i).innerHTML="";
    if(validar(formulario.elements[i])){
      if(formulario.elements[i].value%5==0){ multiplo.push(formulario.elements[i].value); }
    }else{
      document.getElementById('error'+i).innerHTML="campo obligatorio";
    }
  }
  document.getElementById('informacion').innerHTML=multiplo;
}
function validar(objeto){
  var cadena=objeto.value.trim();
 if(cadena=="")
  return false
else return true
}
