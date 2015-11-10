window.onload=function(){
  crearFormulario();
  document.getElementById("enviar").addEventListener("click", function(){
   mostrarInfo();
  });
}
//Recogemos los datos del usuario
function crearFormulario(){
  var formulario=document.getElementById('formulario');
  formulario.innerHTML+="<h1>Tarea del tema 3</h1>";
  formulario.innerHTML+="<table><tr><td><label for='nombre'>Introduce tu nombre: </label></td><td><input type='text' name='nombre' id='nombre'><span id='error' style='color:red'></span><td></tr><tr><td><label for='apellido1'>Introduce tu primer apellido: </label></td><td><input type='text' name='apellido1' id='apellido1'><td></tr><tr><td><label for='apellido2'>Introduce tu segundo apellido: </label></td><td><input type='text' name='apellido2' id='apellido2'><td></tr><tr><td><label for='dia'>Introduce tu día de nacimiento: </label></td><td><input type='text' name='dia' id='dia' placeholder='dd'><td></tr><tr><td><label for='mes'>Introduce tu mes de nacimiento: </label></td><td><input type='text' name='mes' id='mes' placeholder='m'><td></tr><tr><td><label for='anno'>Introduce tu año de nacimiento: </label></td><td><input type='text' name='anno' id='anno' placeholder='aaaa'><span id='errorF' style='color:red'></span><td></tr><tr><td><input type='submit' name='enviar' id='enviar' value='Enviar'></td></tr></table><span id='enviado'></span>";
}
//Imprimimos el resultado en la ventana principal
function mostrarInfo(){
  var resultado=window.opener.document.getElementById('resultado');
  var nombre=document.getElementById('nombre').value;
  if(validar(nombre)){
    document.getElementById('error').innerHTML="";
    resultado.innerHTML+="<hr/><h2>Resultado</h2>";
    resultado.innerHTML+="Buenos días "+document.getElementById('nombre').value;
    resultado.innerHTML+="<br>Tu nombre tiene "+comprobarCaracteres()+" caracteres, incluidos espacios";
    resultado.innerHTML+="<br>La primera letra E de tu nombre está en la posición: "+comprobarPrimeraE();
    resultado.innerHTML+="<br>La última letra E de tu nombre está en la posición: "+comprobarUltimaE();
    resultado.innerHTML+="<br>Tu nombre menos las 3 primeras letras es: "+quitar3Primerasletras();
    resultado.innerHTML+="<br>Tu nombre todo en MAYÚSCULAS es: "+document.getElementById('nombre').value.toUpperCase();
    resultado.innerHTML+="<br>Tu edad es: "+calcularEdad();
    resultado.innerHTML+="<br>Naciste un feliz "+document.getElementById('dia').value +" del año "+document.getElementById('anno').value+". No te acuerdas, pero era "+calcularDiaSemana()+" y "+Bisiesto(document.getElementById('anno').value)+" bisiesto";
    resultado.innerHTML+="<br>El coseno de 90 es: "+calcularCoseno();
    resultado.innerHTML+="<br>El número mayor de (65, 22, 69, 99, 12) es: "+calcularMayor();
    resultado.innerHTML+="<br>Ejemplo de número al azar entre 1 y 10: "+calcularRandom();
    document.getElementById('enviado').innerHTML="Resultados enviados a la ventana padre";
  }

}
//validar nombre
function validar(nombre){
  if(nombre.trim()==""){
    document.getElementById('error').innerHTML="Campo obligatorio";
    return false;
  }
  else return true;
}
//comprobar el número de caracteres
function comprobarCaracteres(){
  var nombre=document.getElementById('nombre').value;
  return nombre.length;
}
//comprobar el índice la primera letra E
function comprobarPrimeraE(){
  var nombre=document.getElementById('nombre').value;
  var posicion=nombre.search(/[eE]/)+1;
  if(posicion==0)
    return "No tiene ninguna letra E";
  else
    return  posicion;
}
//comprobar el índice de la última letra E
function comprobarUltimaE(){
  var nombre=document.getElementById('nombre').value;
  var nombreMay= nombre.toUpperCase();
  var posicion=nombreMay.lastIndexOf('E')+1;
  if(posicion==0)
    return "No tiene ninguna letra E";
  else {
    return posicion;
  }
}
//quitar las primeras 3 letras de una cadena
function quitar3Primerasletras(){
  var nombre=document.getElementById('nombre').value;
  var nombreMay=nombre.toUpperCase().substr(3);
  if(nombreMay.length<4)
    return "Tu nombre tiene 3 o menos letras";
  else
    return nombreMay;
}
function calcularEdad(){
  var today = new Date();
  var annoActual=today.getFullYear()
  var dia=document.getElementById('dia').value;
  var mes=document.getElementById('mes').value;
  var anno=document.getElementById('anno').value;;
  if(validarDia(dia, mes, anno)){
    return annoActual-anno;
  }else{
    document.getElementById('errorF').innerHTML="Fecha incorrecta";
  }
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
function Bisiesto(year){
	return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? "SI" : "NO";
}
function calcularDiaSemana() {
  var Xmas95 = new Date(obtenerDia(), obtenerMes(), obtenerAnno());
  var weekday = Xmas95.getDay();
  switch (weekday) {
    case 0:
      return "LUNES";
      break;
    case 1:
      return "MARTES";
      break;
    case 2:
      return "MIÉRCOLES";
      break;
    case 3:
      return "JUEVES";
      break;
    case 4:
      return "VIERNES";
      break;
    case 5:
      return "SÁBADO";
      break;
    case 6:
      return "DOMINGO";
      break;

  }
}
function obtenerDia(){
  return document.getElementById('dia').value;
}
function obtenerMes(){
  return document.getElementById('mes').value;
}
function obtenerAnno(){
  return document.getElementById('anno').value;
}
function calcularCoseno(){
  var coseno90 = Math.cos(Math.PI/2);
  var redondearCoseno90=Math.round(coseno90);
  return redondearCoseno90;
}
function calcularMayor(){
  return Math.max(65, 22, 69, 99, 12);
}
function calcularRandom(){
  return Math.random()*(10-1)+1;
}
