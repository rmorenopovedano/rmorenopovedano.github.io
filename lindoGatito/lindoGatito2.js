function getNombre(){
  return document.getElementById('nombre').value.trim();
}
function getRaza(){
  return document.getElementById('raza').value.trim();
}
function getDia(){
  return document.getElementById('dia').value.trim();
}
function getMes(){
  return document.getElementById('mes').value.trim();
}
function getAnno(){
  return document.getElementById('anno').value.trim();
}
function getPeso(){
  return document.getElementById('peso').value.trim();
}
function validarDia(dia, mes, anno){
  if(mes==2){
    if(esBisiesto(anno)){
      if(dia>=1 && dia<=29)
        return true;
      else
        return false;
    }else {
      if (dia>=1 && dia<=28) {
        return true;
      }else
        return false;
    }
  }
  else if (mes==4 || mes==6 || mes==9 || mes==11){
    if(dia>=1 && dia<=30)
      return true;
    else {
      return false;
      }
    }else {
      if(dia>=1 && dia<=31)
        return true;
      else {
        return false;
      }
    }
}
function esBisiesto(year){
	return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;
}
