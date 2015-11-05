/*Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si
es correcta. Si lo fuera, ha de mostrar la hora un segundo después.
*/
window.onload=function(){
  document.getElementById('button').onclick=ComprobacionHora;
}
function ComprobacionHora(){
  var segundos=getSegundos();
  var minutos=getMinutos();
  var horas=getHoras();
  var segundoSiguiente=(segundos+1);
  console.log(segundos);
  console.log(segundoSiguiente);
  if(validar(segundos,minutos,horas)){
    if (segundoSiguiente > 59){
      segundoSiguiente = "00";
      minutos++;
      if(minutos > 59){
        minutos = "00";
        horas++;
        if(horas > 23){
          horas = "00";
        }
      }
    }
    informacion = "<p><b>El segundo siguiente es " + horas + ":" + minutos + ":" + segundoSiguiente + ".</b></p>";
    document.getElementById("informacion").innerHTML = informacion;
  }else {
    document.getElementById('error').innerHTML="Formato incorrecto";
  }

}
function validar(hora,minuto,segundo){
	var msg = "";
	if(isNaN(hora)){
		msg = "No ha introducido una hora válida.";
		document.getElementById("error").innerHTML = msg;
		return false;
	} else if(isNaN(minuto)){
		msg = "No ha introducido un minuto válido.";
		document.getElementById("error").innerHTML = msg;
		return false;
	} else if(isNaN(segundo)){
		msg = "No ha introducido un segundo válido.";
		document.getElementById("error").innerHTML = msg;
		return false;
	}


	var msg = "";
	document.getElementById("error").innerHTML = msg;
	return true;
};
function getSegundos(){
  var segundo=document.getElementById('segundos').value;
  return parseInt(segundo);
}
function getMinutos(){
  var minuto=document.getElementById('minutos').value;
  return parseInt(minuto);
}
function getHoras(){
  var hora=document.getElementById('hora').value;
  return parseInt(hora);
}
