$(document).ready(function(){
  
  var triggerVanilla = '.nav__trigger';
  var triggerMain = '.nav__trigger--main';
  var triggerSocial = '.nav__trigger--social';
  var navVanilla = '.nav--main, .nav--social';
  var navMain = '.nav--main';
  var navSocial = '.nav--social';
  var overlay = '.overlay';

  var toggleOverlay = function(){
    $(overlay).toggle();
  };

  var hideNav = function(){
    $(navVanilla).hide();
  };

  $(triggerVanilla).click(function(){
    $(toggleOverlay);
  });

  $(triggerMain).click(function(){
    $(navMain).toggle();
  });

  $(triggerSocial).click(function(){
    $(navSocial).toggle();
  });

  $(overlay).click(function(){
    $(toggleOverlay);
    $(hideNav);
  });
});

