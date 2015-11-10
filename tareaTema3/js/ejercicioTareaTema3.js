//Tarea tema 3

window.onload=function(){
  crearVentana();
}
//creamos una nueva ventana
function crearVentana(){
  var nuevaVentana=window.open();
  var ventanaIES = window.open("http://www.iesgrancapitan.org/portal/", "IESGranCapitán", "width=800,height=600");
  //Escribimos en el documento
  nuevaVentana.document.write("<!doctype html>")
  nuevaVentana.document.write('<html lang="es">');
  nuevaVentana.document.write("<head>");
  nuevaVentana.document.write('<meta charset="UTF-8">');
  nuevaVentana.document.write("<title>Nueva ventana</title>");
  nuevaVentana.document.write("<script type='text/javascript' src='js/ejercicioTareaTema3b.js'></script>");
  nuevaVentana.document.write("</head>");
  nuevaVentana.document.write("<body>");
  nuevaVentana.document.write("<h1>Nueva Ventana</h1>");
  nuevaVentana.document.write("<p><b>URL Completa: </b>" +location.href+"</p>");
  nuevaVentana.document.write("<p><b>Protocolo utilizado: </b>" +location.protocol+"</p>");
  nuevaVentana.document.write("<p><b>Nombre en código del navegador: </b>" +navigator.userAgent+"</p>");
  // Detectamos si Java está disponible en el navegador:
	if(navigator.javaEnabled()){
		nuevaVentana.document.write("<p>Java <b>SI</b> disponible en esta ventana.</p>");
	} else {
		nuevaVentana.document.write("<p>Java <b>NO</b> disponible en esta ventana.</p>");
	}
  nuevaVentana.document.write("<div id='formulario'></div>");
  nuevaVentana.document.close();
}
