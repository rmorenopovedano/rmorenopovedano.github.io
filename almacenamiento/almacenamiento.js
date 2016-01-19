/**
 * Created by sempe on 18/01/2016.
 * Estudia las distintas formas de almacenamiento en el lado del cliente (cookies, sessionStorage, localStorage...)

 Entrega una página donde se documenten los métodos (lectura, escritura...), pros y contras.

 Enlaza cada uno de las distintas formas de almacenamiento con un ejemplo (por ejemplo, que guarde/recupere la configuración de un usuario, como puede ser el login, el color de fondo...)
 */


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(info) {
    var user=getCookie("username");
    var pass=getCookie('password');
    var usuario=document.getElementById('user');
    var password=document.getElementById('pass');
    if (user != "" && pass!="" && user!=null && pass!=null) {
        usuario.value=user;
        password.value=pass;
        document.getElementById('enviar').addEventListener('click',function(){
            if(user==usuario.value && pass==password.value){
                abrirVentana(user);
            }else{
                document.getElementById('formulario').style.background="red";
                document.getElementById('info').innerHTML="<p style='color:white; text-align: center'>Datos incorrectos</p>";
            }

        });

    } else {
        document.getElementById('enviar').addEventListener('click', function () {
            var guardar = document.getElementById('guardar');
            if (guardar.checked) {
                user = document.getElementById('user').value.trim();
                pass = document.getElementById('pass').value.trim();
                if (user != "" && user != null && pass != "" && pass != null) {
                    setCookie("username", user, 30);
                    setCookie('password', pass, 30);
                    document.getElementById('info').innerHTML="Cookies guardadas";
                    document.getElementById('formulario').style.background="green";
                }
            }
        })
    }
}
function eliminarCookie(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
function abrirVentana(user){
    var nuevaVentana=window.open();
    nuevaVentana.document.writeln("<html>" +
        "<head>" +
        "<link rel='stylesheet' type='text/css' href='estilo.css'>"+
        "</head>"+
        "<body>" +
        "<h1>Bienvenido "+user+"</h1>" +
        "</body>"+
        "</html>")
}
window.addEventListener("load",function(){
    var info=document.getElementById('mensaje');
    checkCookie(info);
    document.getElementById('eliminar').addEventListener('click',function(){
        eliminarCookie();
    });
});