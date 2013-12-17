$(document).ready(function()
{	
	//Services
	var fbWidth = $("section#services > .container").width();
	$("section#services #flipbook").each(function()
	{
		$(this).turn({
			width: fbWidth,
			height: ((fbWidth/2) * 763) / 1020,
			autoCenter: false
		});
	}); 
	
	$("section#services .previous").click(function(e)
	{
		$("section#services #flipbook").turn("previous"); 
		
		e.preventDefault();
	}); 
	
	$("section#services .next").click(function(e)
	{
		$("section#services #flipbook").turn("next"); 
		
		e.preventDefault();
	}); 
	
	//Contact
	$("section#contact .city").hover(function()
	{
		$(this).children('p').show();
		$(this).children('.opaco').show();
	}, function()
	{
		$(this).children('p').hide();
		$(this).children('.opaco').hide();
	});
});	