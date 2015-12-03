/*
Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso (1-15). Cada vez que crees un objeto gato aparecerá una ventana nueva con una imagen que cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual). El usuario podrá averiguar la edad del gato partiendo de un evento.
Evita las cajas de texto
No puedes usar ni alert ni prompt
Hazlo lo más dinámico posible.
Utiliza prototype para los métodos
*/
//función que valida un gato
function validarGato(){
  if(validarDia(getDia(),getMes(),getAnno()) && getNombre().trim()!=null && getPeso().trim()!=null){
      alert(getAnno());
      return true;
  }

  else return false;
}

window.addEventListener("load", function(){
  document.getElementById('crear').addEventListener("click", function(){
    if(!validarGato()){
      document.getElementById('informacion').innerHTML="No se ha podido crear ningún gato";
      return;
    }
    else{
      var nuevaVentana=window.open("","","top=50, left=300, width=500, height=500");
      var gato=new Gato(getNombre(), getRaza(), getDia(), getMes(), getAnno(), getPeso());
      nuevaVentana.document.open();
      nuevaVentana.document.write('<!DOCTYPE html>'
              + '<html lang="es">'
              + '<head>'
              + '<meta charset="UTF-8">'
              + '<title>Gato</title>'
              + '</head>'
              + '<body>'
              + '<div id="imagen"><img id="imagen"src="img/'+gato.mostrarImagen()+'"></div>'
              + '<div id="informacion">'+gato.mostrarInformacion()+'</div>'
              + '<div id="edad"></div>'
              + '<div id="estado"></div>'
              + '<input type="button" id="jugar" value="Jugar">'
              + '<input type="button" id="comer" value="Comer">'
              + '<input type="button" id="dormir" value="Dormir">'
              + '<input type="button" id="mostrarEdad" value="mostrarEdad">'
              + '</body>'
              + '</html>');
              nuevaVentana.document.close();
    }
    nuevaVentana.document.getElementById('jugar').addEventListener("click", function(){
      nuevaVentana.document.getElementById('estado').innerHTML=gato.jugar();
      nuevaVentana.document.getElementById('informacion').innerHTML=gato.mostrarInformacion();
      nuevaVentana.document.getElementById('imagen').src="img/"+gato.mostrarImagen();
    });
    nuevaVentana.document.getElementById('comer').addEventListener("click", function(){
      nuevaVentana.document.getElementById('estado').innerHTML=gato.comer();
      nuevaVentana.document.getElementById('informacion').innerHTML=gato.mostrarInformacion();
      nuevaVentana.document.getElementById('imagen').src="img/"+gato.mostrarImagen();
        console.log(gato.mostrarImagen());
    });
    nuevaVentana.document.getElementById('dormir').addEventListener("click", function(){
      nuevaVentana.document.getElementById('estado').innerHTML=gato.dormir();
      nuevaVentana.document.getElementById('informacion').innerHTML=gato.mostrarInformacion();
      nuevaVentana.document.getElementById('imagen').src="img/"+gato.mostrarImagen();
    });
    nuevaVentana.document.getElementById('mostrarEdad').addEventListener("click", function(){
      nuevaVentana.document.getElementById('edad').innerHTML=gato.calcularEdad();
    });
  });

});
