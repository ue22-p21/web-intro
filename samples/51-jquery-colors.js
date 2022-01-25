$( function () {
    $( "div" ).click(function() {
        let color = $( this ).css( "background-color" );
        $( "#result" )
            .html( `That div is ${color}` )
            .css("color", color);
    });
})
  