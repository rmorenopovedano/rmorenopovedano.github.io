/**
 * Created by Raul on 15/02/2016.
 */
$(function() {
      $("#abrir").on("click", function(){
            $("#dialog").dialog("open");
      })
      $( "#dialog" ).dialog({
            autoOpen:false
      });
})();