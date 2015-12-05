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
function validarNombre(nombre){
  if(nombre=="")
    throw new NombreInvalidoException("Nombre no válido");
}
function validarMes(mes){
  if(mes<1 || mes>12)
    throw new MesInvalidoException("Mes no válido");
}
function validarAnno(anno){
  var today=new Date();
  var annoActual=today.getFullYear();
  if(anno>annoActual || anno=="")
    throw new AnnoInvalidoException("Año no válido");
}
function validarPeso(peso){
  if(peso<0 || peso>15 || peso=="")
    throw new PesoInvalidoException("Peso no válido");
}


function NombreInvalidoException(message){
  this.message=message;
}
function MesInvalidoException(message){
  this.message=message;
}
function DiaInvalidoException(message){
  this.message=message;
}
function AnnoInvalidoException(message){
  this.message=message;
}
function PesoInvalidoException(message){
  this.message=message;
}

function validarDia(dia, mes, anno){
  if(mes==2){
    if(esBisiesto(anno)){
      if(dia>=1 && dia<=29)
        return true;
      else
        throw new DiaInvalidoException("Día no válido");
    }else {
      if (dia>=1 && dia<=28) {
        return true;
      }else
        throw new DiaInvalidoException("Día no válido");
    }
  }
  else if (mes==4 || mes==6 || mes==9 || mes==11){
    if(dia>=1 && dia<=30)
      return true;
    else {
      throw new DiaInvalidoException("Día no válido");
      }
    }else {
      if(dia>=1 && dia<=31)
        return true;
      else {
        throw new DiaInvalidoException("Día no válido");
      }
    }
}
function esBisiesto(year){
	return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;
}
