$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */
	
	$('nav a, body a.up').click(function(e){
										  
		// If a link has been clicked, scroll the page to the link's hash target:
		
		$.scrollTo( this.hash || 0, 2100);
		e.preventDefault();
	});

});