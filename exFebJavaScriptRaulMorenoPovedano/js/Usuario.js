/**
 * Created by Raul on 09/02/2016.
 */
function Usuario(nombre, apellidos, dni, sexo){
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.dni=dni;
    this.sexo=sexo;
}
Usuario.prototype.mostrar=function(info){
    info.innerHTML="Nombre: "+this.nombre+"<br>Apellidos: "+this.apellidos+"<br>Dni: "+this.dni+"<br>Sexo: "+this.sexo;
}
Usuario.prototype.crearListItem=function(lista){
    var ul=lista;
    var li=document.createElement("li");
    var texto=document.createTextNode(this.nombre+" "+this.apellidos+" "+this.dni+" "+this.sexo);
    li.appendChild(texto);
    ul.appendChild(li);
}