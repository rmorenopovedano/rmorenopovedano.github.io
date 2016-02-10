/**
 * Created by Raul on 10/02/2016.
 */
$(document).ready(function(){
    $("input:checkbox").on("click", function(){
        if($(this).prop('checked'))
            $(this).siblings().prop('disabled', true);
        else
            $(this).siblings().prop('disabled', false);
    })
})