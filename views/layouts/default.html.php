<!DOCTYPE html> 
<html> 
	<head> 
	<title><?php echo isset($title) ? $title : "University of Kent Mobile"; ?></title> 
	
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>

	<base href="/mobile/" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0b1/jquery.mobile-1.0b1.min.css" />
	<link rel="stylesheet" href="http://leaflet.cloudmade.com/dist/leaflet.css" />
	<link rel="stylesheet" href="/mobile/stylesheets/kent.mobile.css" />
	<link rel="apple-touch-icon-precomposed" href="/mobile/images/touch-icon-iphone.png" />
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/mobile/images/touch-icon-ipad.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/mobile/images/touch-icon-iphone4.png" />
	<meta name="apple-mobile-web-app-capable" content="yes">
	<link rel="apple-touch-startup-image" href="/mobile/images/startup.png">
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.6.1.min.js"></script>
	<script type="text/javascript" src="/mobile/js/bookmark_bubble.js"></script>
	<script type="text/javascript" src="/mobile/js/kent.mobile.js"></script>
	<script type="text/javascript" src="http://code.jquery.com/mobile/1.0b1/jquery.mobile-1.0b1.min.js"></script>
	<script src="http://leaflet.cloudmade.com/dist/leaflet.js"></script>

	<script type="text/javascript">
		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
	
	
</head> 
<body> 
	<div data-role="page" class="type-interior" id="<?php echo current_id(); ?>">
		<?php if (isset($header)) echo $header; ?>
		<div data-role="content">  
			<?php if (isset($content)) echo $content; ?>
		</div>
		<?php if (isset($footer)) echo $footer; ?>
	</div>
	
	<?php /*<script>
		(function($) {
			var fixgeometry = function() {
				/* Some orientation changes leave the scroll position at something
					* that isn't 0,0. This is annoying for user experience. *
					$('[data-role=header]').html('1');
				scroll(0, 0);
			};
			var fixgeometry2 = function() {
												$('[data-role=header]').html('2');
				/* Calculate the geometry that our content area should take *
				var header = $("[data-role=header]:visible");
				var footer = $("[data-role=footer]:visible");
				var content = $("[data-role=content]:visible");
				var viewport_height = $(window).height();
		
				var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
		
				/* Trim margin/border/padding height *
				content_height -= (content.outerHeight() - content.height());
				content.height(content_height);
			}; /* fixgeometry *
		
			$(document).ready(function() {
				$(window).bind("orientationchange resize pageshow", fixgeometry);
				$(window).bind("orientationchange resize pageshow", fixgeometry2);
				$(window).bind("scrollstop", fixgeometry2);
			});
		})(jQuery);
	</script>*/ ?>
</body>
</html>
