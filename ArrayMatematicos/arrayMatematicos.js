/*
Mediante prototype, agrega los métodos sumar, restar, trasponer y multiplicar a la clase ArraysMatematicos. Recuerda que el estado de un array deberían de ser los elementos.
Recuerda las restricciones y posibilidades de un Array:
Sobre las dimensines de los arrays implicados (unidimensional, bidimensional...)
Sobre las longitudes de los arrays implicados (1 en adelante)
Sobre los contenidos de los arrays implicados (numéricos)
Podemos rellenar un Array con valores aleatorios o directamente desde teclado.
Una vez creada la clase, demuestra su funcionamiento en una página bien diseñada. Evita las cajas de texto y hazla lo más dinámica posible.
*/
function ArraysMatematicos(fila,columna){
  this.fila=fila;
  this.columna=columna;
  this.matriz=new Array();
}
ArraysMatematicos.prototype.generarMatriz = function () {
	var m1 = new Array(this.fila);
	for (var f = 0; f < this.fila; f++) {
		m1[f] = new Array(this.columna);
		for (var c = 0; c < this.columna; c++) {
			m1[f][c] = generarAleatorio();
		};
	};
	return m1;
};
ArraysMatematicos.prototype.sumar=function(s2){
  var suma;
  if(!this.coincidenDimensiones(s2)){
    return;
  }else{
    suma=new ArraysMatematicos(this.fila, this.columna);
    for (var i = 0; i < this.fila; i++) {
      for (var j= 0; j < this.columna; j++) {
        suma.matriz[i][j]=this.matriz[i][j]+s2.matriz[i][j];
      }
    }return suma;
  }
}
ArraysMatematicos.prototype.restar = function(matriz2) {
	var resta;
  if(!this.coincidenDimensiones(s2)) return;
  else{
    for (var f = 0; f < this.filas; f++) {
      for (var c = 0; c < this.columnas; c++) {
        resta.matriz[f][c] = this.matriz[f][c] - matriz2.matriz[f][c];
      };
    };
    return resta;
  }
};
ArraysMatematicos.prototype.mostrar = function (){
	var cadena = '<pre>';

	for (var f = 0; f < this.fila; f++) {
		for (var c = 0; c < this.columna; c++) {
			cadena += this.matriz[f][c] + "	";
		};
		cadena += '<br>';
	};
	cadena += '</pre>';

	return cadena;
};
ArraysMatematicos.prototype.trasponer = function() {
	var traspuesta = new ArrayMatematico(this.columna, this.fila);

	for (var f = 0; f < this.columna; f++) {
		for (var c = 0; c < this.fila; c++) {
			traspuesta.matriz[f][c] = this.matriz[c][f];
		};
	};

	return traspuesta;
};
ArraysMatematicos.prototype.coincidenDimensiones=function(s2){
  if(this.fila===s2.fila && this.columna===s2.columna)
    return true;
  else return false;
}
function generarAleatorio(){
	return Math.floor(Math.random()*10);
};
//m3=m1.sumar(m2);
//m1.trasponer();
window.addEventListener("load", function(){
   document.getElementById("sumar").addEventListener("click", function(){
      var matriz1=new ArraysMatematicos(2,2);
        matriz1=matriz1.generarMatriz;
        var mostrar=matriz1.mostrar;
        document.getElementById('resultado').innerHTML=mostrar;
    });
});
