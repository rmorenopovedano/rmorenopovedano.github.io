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
    var user=getCookie("username");
    if (user != "" && user!=null) {
        abrirVentana(user);
    } else {
        var guardar=document.getElementById('guardar');
        if(guardar.checked){
            user=document.getElementById('user').value.trim();
            pass=document.getElementById('pass').value.trim();
            if (user != "" && user != null  && pass!= "" && pass!=null){
                setCookie("username", user);
            }
        }

    }
}
function abrirVentana(user){
    var nuevaVentana=window.open();
    nuevaVentana.document.writeln("<html>" +
        "<head>" +
        "</head>"+
        "<body>" +
        "<h1>Bienvenido "+user+"</h1>" +
        "</body>"+
        "</html>")
}
function eliminarCookie(){
    localStorage.removeItem("username");
}

window.addEventListener("load",function(){
    var info=document.getElementById('mensaje');
    checkCookie(info);
    document.getElementById('enviar').addEventListener('click',function(){
        checkCookie(info);
    })
    document.getElementById('eliminar').addEventListener('click',function(){
        eliminarCookie();
    })
})