/**
 * Created by Raul on 16/02/2016.
 */
$(function() {
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
        icons: icons
    });
    $( "#toggle" ).button().click(function() {
        if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
            $( "#accordion" ).accordion( "option", "icons", null );
        } else {
            $( "#accordion" ).accordion( "option", "icons", icons );
        }
    });
});
$(function() {
    $("#abrir").on("click", function(){
        $("#dialog").dialog("open");
    });
    $( "#dialog" ).dialog({
        autoOpen:false
    });
});

$(function() {
    var progressbar = $( "#progressbar" ),
        progressLabel = $( ".progress-label" );

    progressbar.progressbar({
        value: false,
        change: function() {
            progressLabel.text( progressbar.progressbar( "value" ) + "%" );
        },
        complete: function() {
            progressLabel.text( "Complete!" );
        }
    });

    function progress() {
        var val = progressbar.progressbar( "value" ) || 0;

        progressbar.progressbar( "value", val + 2 );

        if ( val < 99 ) {
            setTimeout( progress, 80 );
        }
    }

    setTimeout( progress, 2000 );
});

$(function() {
    var tooltips = $( "[title]" ).tooltip({
        position: {
            my: "left top",
            at: "right+5 top-5"
        }
    });
});