//icono Usuario
var elemento=document.getElementById('iconoUsuario');
var contexto=elemento.getContext('2d');
contexto.fillStyle="rgba(0,0,0,0.4)";
contexto.beginPath();
contexto.arc(15,10,10, 0, 2*Math.PI, false);
contexto.closePath();
contexto.fill();
contexto.fillRect(0,20,30,30);
contexto.fillStyle="rgba(0,0,0,0.6)";
contexto.fillRect(5,30,20,20);
//icono twitter
var elemento=document.getElementById('iconoTwitter');
var contexto=elemento.getContext('2d');
contexto.fillStyle="rgba(0,0,0,0.4)";
contexto.beginPath();
contexto.fillRect(0,15,40,20);
contexto.fillStyle="rgba(0,0,0,0.6)";
contexto.beginPath();
contexto.moveTo(0,15);
contexto.lineTo(20,35);
contexto.lineTo(40,15);
contexto.closePath();
contexto.fill();
//icono ciudad
var elemento=document.getElementById('iconoCiudad');
var contexto=elemento.getContext('2d');
contexto.fillStyle="rgba(0,0,0,0.6)";
contexto.fillRect(0,0,20,50);
contexto.fillRect(20,20,20,30);
contexto.fillStyle="rgba(0,0,0,0.9)";
contexto.fillRect(4,4,10,10);
contexto.fillRect(24,24,10,10);
