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
  this.matriz;
}
ArraysMatematicos.prototype.generarMatriz = function () {
	var m1 = new Array(this.fila);
	for (var f = 0; f < this.fila; f++) {
		m1[f] = new Array(this.columna);
		for (var c = 0; c < this.columna; c++) {
			m1[f][c] = generarAleatorio();
		};
	};
  this.matriz=m1;
};
ArraysMatematicos.prototype.sumar=function(matriz2){
  var suma;
  if(!this.coincidenDimensiones(matriz2)){
    return;
  }else{
    suma=new ArraysMatematicos(this.fila, this.columna);
    suma.generarMatriz()
    for (var i = 0; i < this.fila; i++) {
      for (var j= 0; j < this.columna; j++) {
        suma.matriz[i][j]=this.matriz[i][j]+matriz2.matriz[i][j];
      }
    }
    return suma;
  }
}
ArraysMatematicos.prototype.restar = function(matriz2) {
	var resta;
  if(!this.coincidenDimensiones(matriz2))
    return;
  else{
    resta=new ArraysMatematicos(this.fila,this.columna);
    resta.generarMatriz();
    for (var f = 0; f < this.fila; f++) {
      for (var c = 0; c < this.columna; c++) {
        resta.matriz[f][c] = this.matriz[f][c] - matriz2.matriz[f][c];
      };
    };
    return resta;
  }
};
ArraysMatematicos.prototype.multiplicar = function(matriz2) {
       var multiplicacion;
       if(this.fila != matriz2.columna || this.columna != matriz2.fila){
           return;
       }
       else{
           multiplicacion = new ArraysMatematicos(this.fila, matriz2.columna);
           multiplicacion.generarMatriz();
           for (var i = 0; i < this.fila; i++){
               for (var j = 0; j < matriz2.columna; j++){
                   for (var k = 0; k < this.columna; k++) {
                       multiplicacion.matriz[i][j] += this.matriz[i][k] * matriz2.matriz[k][j];
                   }
               }
           }
           return multiplicacion;
       }
   }
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
	var traspuesta = new ArraysMatematicos(this.columna, this.fila);
  traspuesta.generarMatriz();
	for (var f = 0; f < this.columna; f++) {
		for (var c = 0; c < this.fila; c++) {
			traspuesta.matriz[f][c] = this.matriz[c][f];
		};
	};
  return traspuesta;
};
ArraysMatematicos.prototype.coincidenDimensiones=function(matriz2){
  if(this.fila===matriz2.fila && this.columna===matriz2.columna)
    return true;
  else return false;
}
function generarAleatorio(){
	return Math.floor(Math.random()*10);
};
function filas1(){
  return document.getElementById('fila1').value;
}
function columnas1(){
  return document.getElementById('columna1').value;
}
function filas2(){
  return document.getElementById('fila2').value;
}
function columnas2(){
  return document.getElementById('columna2').value;
}
function validarCampos(){
  if(filas1()=="" || columnas1()=="" || filas2()=="" || columnas2()=="")
    return false;
  else
    return true;
}
//m3=m1.sumar(m2);
//m1.trasponer();
window.addEventListener("load", function(){
  var matriz1;
  var matriz2;
   document.getElementById("crear").addEventListener("click", function(){
     if(validarCampos()){
       document.getElementById('error').innerHTML="";
       matriz1=new ArraysMatematicos(filas1(), columnas1());
       matriz1.generarMatriz();
       var mostrar1=matriz1.mostrar();
       document.getElementById('sumando1').innerHTML=mostrar1;
       matriz2=new ArraysMatematicos(filas2(), columnas2());
       matriz2.generarMatriz();
       var mostrar2=matriz2.mostrar();
       document.getElementById('sumando2').innerHTML=mostrar2;
     }
     else{
      document.getElementById('error').innerHTML="Introduce valores válidos";
     }
   });
   document.getElementById("sumar").addEventListener("click", function(){
     if(matriz1.coincidenDimensiones(matriz2)){
       var matrizSuma=matriz1.sumar(matriz2);
       document.getElementById('resultadoSuma').innerHTML=matrizSuma.mostrar();
     }else{
         document.getElementById('resultadoSuma').innerHTML="No se pueden sumar matrices de distinta dimensión";
     }
    });
    document.getElementById("restar").addEventListener("click", function(){
      if(matriz1.coincidenDimensiones(matriz2)){
        var matrizResta=matriz1.restar(matriz2);
        document.getElementById('resultadoResta').innerHTML=matrizResta.mostrar();
      }else{
          document.getElementById('resultadoResta').innerHTML="No se pueden restar matrices de distinta dimensión";
      }
     });
     document.getElementById("multiplicar").addEventListener("click", function(){
       if(matriz1.columna == matriz2.fila){
         var matrizMultiplicacion=matriz1.multiplicar(matriz2);
         document.getElementById('resultadoMultiplicacion').innerHTML=matrizMultiplicacion.mostrar();
       }
       else{
         document.getElementById('resultadoMultiplicacion').innerHTML="Las columnas de la primera matriz deben ser igual a las filas de la segunda matriz para poder multiplicarse.";
       }

      });
     document.getElementById("trasponer").addEventListener("click", function(){
       var matriz1Traspuesta=matriz1.trasponer();
       var matriz2Traspuesta=matriz2.trasponer();
       document.getElementById("traspuesta1").innerHTML=matriz1Traspuesta.mostrar();
       document.getElementById("traspuesta2").innerHTML=matriz2Traspuesta.mostrar();
      });
});
