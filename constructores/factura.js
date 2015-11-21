/*
Modificar el ejercicio anterior del objeto Factura para crear una pseudoclase llamada Factura y que permita crear objetos de ese tipo. Se deben utilizar las funciones constructoras y la propiedad prototype.

Para instanciar la clase, se debe utilizar la instrucción Factura(cliente, elementos), donde cliente también es una pseudoclase que guarda los datos del cliente y elementos es un array simple que contiene las pseudoclases de todos los elementos que forman la factura.
*/
window.addEventListener("load", function(){
    document.getElementById("enviar").addEventListener("click", function(){
      function Factura(cl, ele) {
        this.cliente = cl;
        this.elementos = ele;
        this.info={
          ivaReducido: 0.10,
          ivaNormal: 0.21,
          total:0
        }
      }
      function Cliente(idCliente, nombre, apellido){
        this.idCliente=idCliente;
        this.nombre=nombre;
        this.apellido=apellido;
      }
      function Elemento(nombre,cantidad, precio){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
      }

      Factura.prototype.calcularTotal=function(){
        for (var i = 0; i < this.elementos.length; i++) {
          this.info.total+=this.elementos[i].precio+this.info.ivaNormal;
        }
      }
      Factura.prototype.muestraTotal=function(){
        this.calcularTotal();
        document.getElementById('resultado').innerHTML=this.info.total;
      }
      Factura.prototype.muestraInfo=function(){
        var info=this.cliente.nombre+" "+this.cliente.apellido;
        for (var i = 0; i < this.elementos.length; i++) {
          var info2=this.elementos[i].nombre+" "+this.elementos[i].cantidad+" "+this.elementos[i].precio+"<br>";
        }
        document.getElementById('info').innerHTML+=info;
        document.getElementById('resultado').innerHTML+=info2;
      }
      var cliente1=new Cliente(1,"Raúl","Moreno");
      var elementos1= [new Elemento("tomates",10, 2), new Elemento("patatas", 5, 1.5), new Elemento("verduras", 3, 4)];
      var factura1=new Factura(cliente1,elementos1);
      //mostrar información
      factura1.muestraInfo();
      factura1.muestraTotal();
    });

});
