/**
 *  Mobile Navigation
 */

function mobileNavigation(){
  
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
};

/**
 *  Shift Navigation - 'Tidbits' slider
 */

function shiftNavigation(){

  var buttonNext = '.shift--next';
  var buttonPrev = '.shift--prev';
  var container = '.container--tidbits';
  var innerContainer = '.container--tidbits--pseudo';
  
  var setInnerContainerWidth = function(){
    var totalWidth = 0;
    $(innerContainer + ' ' + 'figure').each(function(index) {
     totalWidth += parseInt($(this).width() + 10);
    });
    $(innerContainer).width(totalWidth - 10);
  };

  var shiftNext = function(){
    var width = $(container).width();
    var currentPosition = $(container).scrollLeft();
    $(container).animate({
      scrollLeft: currentPosition + width
    }, 500
    );
  };

  var shiftPrev = function(){
    var width = $(container).width();
    var currentPosition = $(container).scrollLeft();
    $(container).animate({
      scrollLeft: currentPosition - width
      }, 500
    );
  };

  $(setInnerContainerWidth);

  $(buttonNext).click(function(){
    $(shiftNext);
  });

  $(buttonPrev).click(function(){
    $(shiftPrev);
  });

};

/**
 *  Calculate height of Tidbits intro (on mobile) and apply this to 'top' property for slider 'back' & 'next' icons
 */

function moveShifts(){
  var tidbitsIntroHeight = $('.tidbits__intro').outerHeight();
  var containerHeight = $('.container--tidbits').outerHeight();
  $('.shift').css({
    top: tidbitsIntroHeight,
    height: containerHeight
  });
};

/**
 *  Image Viewer
 *
 *  Needs to:
 *  
 *  - Get href of clicked link
 *  - Create <img> tag with href as src
 *  - Place <img> in container
 *  - If another <a> clicked, replace <img> src in container with href of clicked <a>
 */

function imageViewer(){

  $('a.tidbits__item__link').click(function(){
    var imageBlurb = $(this).siblings('figcaption').text();
    var imageTitle = $(this).siblings('h3').text();
    var bigImageContainer = '.tidbits__view-holder';
    var bigImage = '.tidbits__view-holder img';
    var fullImageSrc = this.href.replace('thumb', 'full'); // get image src and store as variable, linking to full instead of thumbnail
    
    $(bigImage).attr('src', fullImageSrc); // set big image src as that above
    $(bigImageContainer).find('.tidbits__view-holder__blurb').text(imageBlurb); // set blurb
    $(bigImageContainer).find('.tidbits__view-holder__title').text(imageTitle); // set title
    
    $(bigImageContainer).show().animate({
      opacity: 1
    }, 250);
    $('html, body').animate({ // scroll to big image
      scrollTop: $("#scrollTo").offset().top
    }, 500);
    return false;
    
  });

};

/**
 *  IMPLEMENTATION
 */

$(document).ready(function(){
  $(mobileNavigation);
  $(shiftNavigation);
  if($(window).width() < 640){
    $(moveShifts);
  };
  $(imageViewer);
});