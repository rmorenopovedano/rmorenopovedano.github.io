/**
 * Created by sempe on 18/01/2016.
 */

function setCookie(cname,cvalue) {
    localStorage.setItem(cname, cvalue);
}

function getCookie(cname) {
    return localStorage.getItem(cname);
}

function checkCookie(info) {

    var user=getCookie('usuario_storage');
    var pass=getCookie('password_storage');
    var usuario=document.getElementById('user');
    var password=document.getElementById('pass');
    if (user != "" && pass!="" && user!=null && pass!=null) {
        usuario.value=user;
        password.value=pass;
        document.getElementById('enviar').addEventListener('click',function(){
            if(user==usuario.value && pass==password.value){
                abrirVentana(user);
            }else{
                document.getElementById('info').innerHTML="<p style='color:red; text-align: center'>Datos incorrectos</p>";
            }

        });

    } else {
        document.getElementById('enviar').addEventListener('click', function(){
            var guardar=document.getElementById('guardar');
            if(guardar.checked){
                user=document.getElementById('user').value.trim();
                pass=document.getElementById('pass').value.trim();
                if (user != "" && user != null  && pass!= "" && pass!=null) {
                    setCookie("usuario_storage", user);
                    setCookie('password_storage', pass);
                }
            }

        })

    }
}
function abrirVentana(user){
    var nuevaVentana=window.open('');
    nuevaVentana.document.write("<html>" +
        "<head><title>Ejercicio js</title>"+
        "<link rel='stylesheet' href='estilo.css' type='text/css'/>" +
        "</head>"+
        "<body>" +
        "<h1>Bienvenido "+user+"</h1>" +
        "</body>"+
        "</html>");
    nuevaVentana.document.close();
}
function eliminarCookie(){
    localStorage.removeItem("usuario_storage");
}

window.addEventListener("load",function(){
    var info=document.getElementById('mensaje');
    checkCookie(info);
    document.getElementById('eliminar').addEventListener('click',function(){
        eliminarCookie();
    });
});