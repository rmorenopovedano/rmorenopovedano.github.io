function aceptar (){
  window.opener.location.reload();
  window.close();

}
function rechazar(){
  document.write("<br>Adiós");
  setTimeout(function(){window.close();},1000);
}

window.addEventListener("load", function(){
    document.getElementById("si").addEventListener("click", aceptar);
    document.getElementById("no").addEventListener("click", rechazar);
});
