(function($){

  var dir = 'uploads/';

  // Ajax request
  $.ajax({
    url:          dir,
    dataType:     'html',
    contentType:  false,
    processData:  false,
    success: function ( data ) {
      $( data )
      // all the types
      .find('a[href*=".jpg"], a[href*=".gif"], a[href*=".png"], a[href*=".JPG"]')
      .each( function () {
        var filename = this.href.replace( window.location.host, '' ).replace( 'http://', '' ).replace( '/drop', '');
        $( '.display' ).append( '<img src="' + dir + filename + '">' );
      });
    }
  });

})(jQuery);