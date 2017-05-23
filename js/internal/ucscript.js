$(document).ready(function(){
  $('a[href^="#"]').click(function() {

	  $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 300);

	  return false;

	  e.preventDefault();

	  });
  });