
$(document).ready(function(){
    $("p").bind("click mouseenter", function(){
        if($(this).css("background-color")=="rgb(255, 0, 0)"){
            $(this).css("background","green");
        }else{
            $(this).css("background","yellow");
        }
    });
})