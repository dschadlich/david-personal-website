$( document ).ready(function() {


// parallax
  $('.img-holder').imageScroll({
//            image: null,
//            imageAttribute: 'image',
//            container: $('body'),
//            windowObject: $(window),
            speed:.7,
//            coverRatio:.75,
            coverRatio:1,
//            holderClass: 'imageHolder',
            imgClass: 'img-holder-img hidden-xs hidden-sm',
//            holderMinHeight: 200,
//            holderMaxHeight: null,
//            extraHeight: 50,
//            mediaWidth: 1600,
//            mediaHeight: 900,
            parallax: true,
//            touch: false
  });


positionJumbotron ();





});

$( window ).resize(function() {
  console.log ("window resized");
  positionJumbotron ();
});


function positionJumbotron (){
  console.log ("Window size: " + $( window ).width () + "x" + $( window ).height());
  console.log ("jumbot size: " + $( ".nameHeader" ).width () + "x" + $( ".nameHeader" ).height());
//$( ".nameHeader" ).css("padding-top", "500" + "px");

}
