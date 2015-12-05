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
    try {
        validarNombre(getNombre());
        validarDia(getDia(), getMes(), getAnno());
        validarMes(getMes());
        validarAnno(getAnno());
        validarPeso(getPeso());
        return true;
    } catch (e) {
        document.getElementById('informacion').innerHTML= e.message;
    }

}

window.addEventListener("load", function(){
  document.getElementById('crear').addEventListener("click", function(){
    if(!validarGato()){
      document.getElementById('informacion2').innerHTML="No se ha podido crear ningún gato";
      return;
    }else{
      document.getElementById('informacion2').innerHTML="";
        document.getElementById('informacion').innerHTML= "";
      var nuevaVentana=window.open("","","top=50, left=400, width=500, height=500");
      var gato=new Gato(getNombre(), getRaza(), getDia(), getMes(), getAnno(), getPeso());
      nuevaVentana.document.open();
      nuevaVentana.document.write('<!DOCTYPE html>'
              + '<html lang="es">'
              + '<head>'
              + '<meta charset="UTF-8">'
              + '<title>Gato</title>'
              + '<link rel="stylesheet" href="lindoGatito2.css">'
              + '</head>'
              + '<body>'
              + '<h1>Gato: '+gato.raza+'</h1>'
              + '<div id="imagen"><img src="img/'+gato.mostrarImagen()+'"></div>'
              + '<div id="informacion">'+gato.mostrarInformacion()+'</div>'
              + '<div id="estado"></div>'
              + '<div id="edad"></div>'
              + '<input type="button" id="jugar" value="Jugar">'
              + '<input type="button" id="comer" value="Comer">'
              + '<input type="button" id="dormir" value="Dormir">'
              + '<input type="button" id="mostrarEdad" value="mostrarEdad">'
              + '</body>'
              + '</html>');
              nuevaVentana.document.close();
    }
      function desactivarBotones(){
          nuevaVentana.document.getElementById('jugar').disabled=true;
          nuevaVentana.document.getElementById('comer').disabled=true;
          nuevaVentana.document.getElementById('dormir').disabled=true;
      }
    nuevaVentana.document.getElementById('jugar').addEventListener("click", function(){
        if(gato.estado=="muerto"){
            desactivarBotones();
        }else{
            nuevaVentana.document.getElementById('estado').innerHTML = gato.jugar();
            nuevaVentana.document.getElementById('informacion').innerHTML = gato.mostrarInformacion();
            nuevaVentana.document.getElementById('imagen').innerHTML = "<img src='img/" + gato.mostrarImagen() + "'>";
        }

    });
    nuevaVentana.document.getElementById('comer').addEventListener("click", function(){
        if(gato.estado=="muerto"){
            desactivarBotones()

        }else{
            nuevaVentana.document.getElementById('estado').innerHTML=gato.comer();
            nuevaVentana.document.getElementById('informacion').innerHTML=gato.mostrarInformacion();
            nuevaVentana.document.getElementById('imagen').innerHTML="<img src='img/"+gato.mostrarImagen()+"'>";
        }

    });
    nuevaVentana.document.getElementById('dormir').addEventListener("click", function(){
      nuevaVentana.document.getElementById('estado').innerHTML=gato.dormir();
      nuevaVentana.document.getElementById('informacion').innerHTML=gato.mostrarInformacion();
        nuevaVentana.document.getElementById('imagen').innerHTML="<img src='img/"+gato.mostrarImagen()+"'>";
    });
    nuevaVentana.document.getElementById('mostrarEdad').addEventListener("click", function(){
      nuevaVentana.document.getElementById('edad').innerHTML="<strong>Edad: </strong>"+gato.calcularEdad()+" años";
    });
  });

});
