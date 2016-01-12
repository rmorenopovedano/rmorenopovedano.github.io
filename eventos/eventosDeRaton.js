/**
 * Created by Raul on 12/01/2016.
 * Mediante el registro de eventos recomendado por la W3C, entrega una página donde muestres información referente a todos los eventos del Ratón.
 Puede serte útil la siguiente páginas de librosWeb: introducción a JavaScript e introduccción a Ajax

 Recuerda comprobarlo en los tres navegadores principales.
 */
function resalta(elEvento) {
    var evento = elEvento || window.event;
    switch(evento.type) {
        case 'mouseover':
            this.style.background = 'lightblue';
            document.getElementById('mouseover').innerHTML=evento.type;
            break;
        case 'mouseout':
            this.style.background = 'silver';
            document.getElementById('mouseover').innerHTML=evento.type;
            break;
        case 'click':
            this.style.background='red';
            document.getElementById('click').innerHTML=evento.type;
            break;
        case 'dblclick':
            this.style.background='green';
            document.getElementById('doble').innerHTML=evento.type;
            break;
        case 'mousedown':
            this.style.background='yellow';
            document.getElementById('mousedown').innerHTML=evento.type;
            break;
        case 'mouseup':
            this.style.background='orange';
            document.getElementById('mouseup').innerHTML=evento.type;
            break;
        case 'mousemove':
            this.style.background='pink';
            document.getElementById('mousemove').innerHTML=evento.type;
            break;
    }
}
window.addEventListener("load", function(){
    document.getElementById('mouseover').onmouseover=resalta;
    document.getElementById('mouseover').onmouseout=resalta;
    document.getElementById('click').onclick=resalta;
    document.getElementById('doble').ondblclick=resalta;
    document.getElementById('mousedown').onmousedown=resalta;
    document.getElementById('mouseup').onmouseup=resalta;
    document.getElementById('mousemove').onmousemove=resalta;
})
