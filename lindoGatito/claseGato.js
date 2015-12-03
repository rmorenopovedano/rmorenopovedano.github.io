/*
Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso (1-15). Cada vez que crees un objeto gato aparecerá una ventana nueva con una imagen que cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual). El usuario podrá averiguar la edad del gato partiendo de un evento.
Evita las cajas de texto
No puedes usar ni alert ni prompt
Hazlo lo más dinámico posible.
Utiliza prototype para los métodos
*/
function Gato(nombre, raza, dia,mes, anno, peso){
  this.nombre=nombre;
  this.raza=raza;
  this.dia=dia;
  this.mes=mes;
  this.anno=anno;
  this.peso=peso;
  this.estado="jugando";
}
Gato.prototype.jugar=function(){
  this.peso--;
  if(this.peso<0){
      this.peso=0;
      this.estado="muerto";
      return "Está muerto por exhausto";
    }
  else{
    this.estado="jugando"
    return "Está jugando";
  }
}
Gato.prototype.comer=function(){
  this.peso++;
  if(this.peso<15){
    this.estado="comiendo";
    return "Está comiendo";
  }
  else{
    this.peso=15;
    this.estado="muerto";
    return "Está muerto por sobrepeso";
  }

}
Gato.prototype.dormir=function(){
  this.estado="durmiendo";
  return this.nombre+" está durmiendo... Zzzzz";
}
Gato.prototype.mostrarInformacion = function () {
  return '<p><strong>Nombre: </strong>' + this.nombre
        + '. <strong>Fecha de nacimiento: </strong>' + this.dia + '/' + this.mes + '/' + this.anno
        + '. <strong>Raza: </strong>' + this.raza
        + '. <strong>Peso (kg): </strong>' + this.peso + 'kg.</p>'
        + 'estado: '+this.estado;
}
Gato.prototype.mostrarImagen=function(){
  return this.raza+"_"+this.estado+".jpg";
}
Gato.prototype.calcularEdad=function(){
    var today = new Date();
    var annoActual=today.getFullYear();
    var mesActual=today.getMonth()+1;
    var diaActual=today.getDate();
    var edad=annoActual-this.anno-1;
    if(mesActual>this.mes)
      edad++;
      else if(mesActual==this.mes){
        if(diaActual>=this.dia)
          edad++;
      }
      return edad;
}
