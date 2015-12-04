/**
 * Created by Raul on 04/12/2015.
 */
//limpiar las sombras de la tabla
function limpiar(){
    var php=document.getElementsByClassName('php');
    for (var i= 0; i<php.length;i++){
        php[i].style.boxShadow = "";
    }
    var js=document.getElementsByClassName('js');
    for (var i= 0; i<js.length;i++){
        js[i].style.boxShadow = "";
    }
    var diseno=document.getElementsByClassName('diseno');
    for (var i= 0; i<diseno.length;i++){
        diseno[i].style.boxShadow = "";
    }
    var despliegue=document.getElementsByClassName('despliegue');
    for (var i= 0; i<despliegue.length;i++){
        despliegue[i].style.boxShadow = "";
    }
    var android=document.getElementsByClassName('android');
    for (var i= 0; i<android.length;i++){
        android[i].style.boxShadow = "";
    }
    var empresas=document.getElementsByClassName('empresas');
    for (var i= 0; i<empresas.length;i++){
        empresas[i].style.boxShadow = "";
    }
}
//cargar elementos de la ventana
window.addEventListener("load", function(){
    document.getElementById('php').addEventListener("click", function(){
        limpiar();
        document.getElementById('caption_formulario').innerHTML="PHP";
        document.getElementById('caption_formulario').style.backgroundColor="red";
        var php=document.getElementsByClassName('php');
        for (var i= 0; i<php.length;i++){
            php[i].style.boxShadow = "2px 2px 27px 9px red";
        }
    });
    document.getElementById('js').addEventListener("click", function(){
        limpiar();
        document.getElementById('caption_formulario').innerHTML="JAVASCRIPT";
        document.getElementById('caption_formulario').style.backgroundColor="green";
        var js=document.getElementsByClassName('js');
        for (var i= 0; i<js.length;i++){
            js[i].style.boxShadow = "2px 2px 27px 9px green";
        }
    });
    document.getElementById('html').addEventListener("click", function(){
        limpiar();
        document.getElementById('caption_formulario').innerHTML="HTML 5";
        document.getElementById('caption_formulario').style.backgroundColor="yellow";
        var diseno=document.getElementsByClassName('diseno');
        for (var i= 0; i<diseno.length;i++){
            diseno[i].style.boxShadow = "2px 2px 27px 9px yellow";
        }
    });
    document.getElementById('despliegue').addEventListener("click", function(){
        limpiar();
        document.getElementById('caption_formulario').innerHTML="DESPLIEGUE";
        document.getElementById('caption_formulario').style.backgroundColor="pink";
        var despliegue=document.getElementsByClassName('despliegue');
        for (var i= 0; i<despliegue.length;i++){
            despliegue[i].style.boxShadow = "2px 2px 27px 9px pink";
        }
    });
    document.getElementById('android').addEventListener("click", function(){
        limpiar();
        document.getElementById('caption_formulario').innerHTML="ANDROID";
        document.getElementById('caption_formulario').style.backgroundColor="orange";
        var android=document.getElementsByClassName('android');
        for (var i= 0; i<android.length;i++){
            android[i].style.boxShadow = "2px 2px 27px 9px orange";
        }
    });
    document.getElementById('empresas').addEventListener("click", function(){
        limpiar();
        document.getElementById('caption_formulario').innerHTML="EMPRESAS";
        document.getElementById('caption_formulario').style.backgroundColor="blue";
        var empresas=document.getElementsByClassName('empresas');
        for (var i= 0; i<empresas.length;i++){
            empresas[i].style.boxShadow = "2px 2px 27px 9px blue";
        }
    });
});