$(document).ready(function() {
   

  $(".jobs_img").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: '.png', 
    gallery:{enabled:true}
    // other options
  });

  }); 