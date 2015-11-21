/*
Extender la clase String para que permita truncar una cadena de texto a un tamaño indicado como parámetro:

var cadena = "hola mundo";
cadena2 = cadena.truncar(6); // cadena2 = "hola m"
Modificar la función anterior para que permita definir el texto que indica que la cadena se ha truncado:

var cadena = "hola mundo";
cadena2 = cadena.truncar(6, '...'); // cadena2 = "hol..."

*/
window.addEventListener("load", function(){
    document.getElementById("enviar").addEventListener("click", function(){
      String.prototype.truncar = function(longitud, indicador) {
      longitud = longitud || 10;
      indicador = indicador || '...';

      if(this.length > longitud) {
        return this.substring(0, longitud-indicador.length) + indicador;
      }
      else {
        return this;
      }
    }

      var cadena="En un lugar de la mancha de cuyo nombre no quiero acordarme.";
      document.getElementById('info').innerHTML=cadena;
      cadena2=cadena.truncar(20);
      document.getElementById('resultado').innerHTML=cadena2;


    });
});
