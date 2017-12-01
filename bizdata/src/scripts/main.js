
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
// Export your custom function for declarative use
export { masonryBuild, navbarToggleSidebar, navActivePage }

var msnry = "";

// Code your custom function
function masonryBuild( strings ) {
  var elem = document.querySelector('.grid');
  
  msnry = new Masonry( elem, {
      // options
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      gutter: '.gutter-sizer'
    });

  imagesLoaded( elem ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
  });

}


function navbarToggleSidebar() {
  $('.navbar-toggle').click(function(event){
    event.preventDefault();

    $("#main-collapse").toggleClass('open');
    $(".sidebar").toggleClass('open');
    
    setTimeout(function() {
      msnry.layout()
    }, 200);
    
  });
}


function navActivePage(){
  $('nav li a[href=".' + location.pathname + '"]').addClass('active');
  if (location.pathname == '/') $('nav li a[href="./index.html"]').addClass('active')
}