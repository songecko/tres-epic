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
	
	$('.maparea').mapael({
		map : {
			name : "world_countries",
			defaultArea: {
				attrs : {
					fill: "#fff",
					stroke : "#232323",
					"stroke-width" : 0.3
				},
				attrsHover : {
					fill: "#fff"
				}
			},
			afterInit : function($self, paper, areas, plots, options) {
				var mapConf = $.fn.mapael.maps[this.name]
					, coords = {};
				
				for (var id in options.images) {
					coords = mapConf.getCoords(options.images[id].latitude, options.images[id].longitude);
					paper.image(options.images[id].src, coords.x - options.images[id].width / 2, coords.y - options.images[id].height / 2, options.images[id].width, options.images[id].height);
				}
			}
		},
		'images' : {
			'sanjuan' : {
	            'src' : 'images/map-pin.png',
	            'latitude' : '18.466334',
	            'longitude' : '-66.105722',
	            'width':32,
	            'height':92
	        },
	        'london' : {
	          	'src' : 'images/map-pin.png',
	            'latitude' : '51.5001524',
	            'longitude' : '-0.1262362',
	            'width':32,
	            'height':92
	        },
	        'bsas' : {
	          	'src' : 'images/map-pin.png',
	            'latitude' : '-34.6084175',
	            'longitude' : '-58.3731613',
	            'width':32,
	            'height':92
	        }
	    }
	});
});	