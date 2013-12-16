$(document).ready(function()
{	
	$("section#services #flipbook").each(function()
	{
		$(this).turn({
			width: 1020,
			height: 382,
			autoCenter: false
		});
	}); 
	
	$("section#services .previous").click(function()
	{
		$("section#services #flipbook").turn("previous"); 
	}); 
	
	$("section#services .next").click(function()
	{
		$("section#services #flipbook").turn("next"); 
	}); 
	
	$("section#team #flipbook").each(function()
	{
		$(this).turn({
			width: 1020,
			height: 382,
			autoCenter: false
		});
	}); 
	
	
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