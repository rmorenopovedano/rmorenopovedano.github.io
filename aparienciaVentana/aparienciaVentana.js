/*
Apariencia de las ventanas

Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
Métodos a utilizar:
window.open()
document.write()
Añade el esqueleto básico: html, head, title, body, ul...
*/

document.getElementById("button").addEventListener("click", function(){
    abrirVentana();
});
function abrirVentana(){
  var nuevaVentana=window.open("","", "width=300, height=200, top=0, left=0");
  nuevaVentana.document.write("<html>");
  nuevaVentana.document.write("<head>");
  nuevaVentana.document.write("<title>Ventana de prueba</title>");
  nuevaVentana.document.write("</head>");
  nuevaVentana.document.write("<body>");
  nuevaVentana.document.write("Se han utilizado las propiedades:");
  nuevaVentana.document.write("<ul>");
  nuevaVentana.document.write("<li>height=200</li>");
  nuevaVentana.document.write("<li>width=300</li>");
  nuevaVentana.document.write("</ul>");
  nuevaVentana.document.write("</body>");
  nuevaVentana.document.write("</html>");
  nuevaVentana.document.close();

}
