/*Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la
fecha es correcta. Si lo fuera, ha de mostrar el día después
*/
window.onload=function(){
  document.getElementById('button').onclick=ComprobacionFecha;
}
function ComprobacionFecha(){
  var dia=document.getElementById('dia').value;
  var mes=document.getElementById('mes').value;
  var anno=document.getElementById('anno').value;
  var diaSiguiente=dia+1;
  if(validarFecha(dia,mes,anno){

  }
}

function esBisiesto(anno){
	if ((anno % 100 != 0) && ((anno % 4 == 0) || (anno % 400 == 0))) {
		return true;
    }else {
    	return false;
    }
}

function validarFecha(dia,mes,anno){
if(parseInt(mes)==2){
  if(esBisiesto(anno))
    if(dia>29)
      return false;
    else
      return true;
  else{
    if(dia>28)
      return false;
    else {
      return true;
    }
  }
}else{
  if(dia>31)
}

}
