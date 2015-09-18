
	$(window).load(function(){

            setInterval(function() {

               var $body = $('body');

                if($body.hasClass('background1')) {

                    $body.removeClass('background1');
                    $body.addClass('background2');

                }

                else {        

                    $body.removeClass('background2');
                    $body.addClass('background3');

                }

            }, 3500);
            });

});