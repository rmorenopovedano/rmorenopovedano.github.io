/*
Extender el objeto Array para que permita añadir nuevos elementos al final del array:

var array1 = [0, 1, 2];
array1.anadir(3);
// array1 = [0, 1, 2, 3]
Incluir la opción de controlar si se permiten elementos duplicados o no:

var array1 = [0, 1, 2];

array1.anadir(2);
// array1 = [0, 1, 2, 2]

array1.anadir(2, false);
// array1 = [0, 1, 2]

*/
window.addEventListener("load", function(){
    document.getElementById("enviar").addEventListener("click", function(){
      Array.prototype.existe=function(elemento){
        for (var i = 0; i < this.length; i++) {
          if(this[i]===elemento)
            return true;
        }return false;
      }
      Array.prototype.anadir=function(elemento,permitirDuplicado){
        if(permitirDuplicado==null)
          permitirDuplicado=false;
        if(permitirDuplicado){
          this.push(elemento);
        }else {
            if(this.existe(elemento)){
              //no hago nada
            }else{
              this.push(elemento);
            }
          }
      }
      var array=[0,1,2];
      document.getElementById('info').innerHTML=array;
      array.anadir(2,true);
      document.getElementById('resultado').innerHTML=array;
      array.anadir(2,false);
      document.getElementById('resultado2').innerHTML=array;
    });
});
