window.addEventListener("load", function(){
  var calcularPrimos=function(){
    var arrayPrimos= [];
    var sumaPrimos=0;
    function esPrimo(primo, anterior){
      if (anterior === 1)
        return true;
      if(primo%anterior === 0)
        return false;
      return esPrimo(primo, anterior-1);
    }
    function anadirNumeros() {
      for (var i = 2; i < 100; i++) {
        if(esPrimo(i,i-1))
        arrayPrimos.push(i);
      }
    }
    function anadirPrimos(){
        for (var i = 0; i< arrayPrimos.length; i++) {
            sumaPrimos+=arrayPrimos[i];
        }
    }
    function mostrarPrimos(){
      document.getElementById('primos').innerHTML=arrayPrimos;
      document.getElementById('suma').innerHTML=sumaPrimos;
    }
  anadirNumeros();
  anadirPrimos();
  mostrarPrimos();
  }();  
});
