/**
 * Created by Raul on 10/02/2016.
 */
$(document).ready(function(){
    $(document).on("click", function(evento){
       $("div").text("X: "+evento.pageX+"----Y: "+evento.pageY);
    })
})