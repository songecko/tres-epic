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
	
	
	$("section#contact .city").hover(function()
	{
		$(this).children('p').show();
	}, function()
	{
		$(this).children('p').hide();
	});
});	