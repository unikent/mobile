if (typeof kent == 'undefined') kent = {};
if (typeof kent.vars == 'undefined') kent.vars = {};
if (typeof kent.funcs == 'undefined') kent.funcs = {};
if (typeof kent.pages == 'undefined') kent.pages = {};

var _gaq = _gaq || [];
	
jQuery("div[data-role*='page']").live('pageshow', function(event, ui) {
	var thisId = $(this).attr("data-url") || "index";

	//if( typeof thisId != 'undefined') {
		thisId = thisId.replace(/\.html(.*)$/gi, "");
		console.log("no html " + thisId);
		thisId = thisId.replace(/\W/gi, "");
		kent.vars.currentPage = thisId;
		if(typeof kent.pages[thisId] == 'function') {
			kent.pages[thisId].call(this);
		}
		
	//}
	//do tracking
	var tracking = event.liveFired.URL || "index";
	tracking = tracking.replace("http://www.kent.ac.uk/mobile/", "");
	tracking = tracking.replace("https://www.kent.ac.uk/mobile/", "");
	tracking = tracking.replace("http://preview/www.kent.ac.uk/mobile/", "preview-www/");
	tracking = tracking.replace("https://preview/www.kent.ac.uk/mobile/", "preview-www/");
	console.log(event.liveFired.URL);
	console.log("Google Analytics = " + tracking);
	_gaq.push(['_setAccount', 'UA-23547590-1']);
	_gaq.push(['_trackEvent', 'pageshow', thisId]);
	_gaq.push(['_trackPageview', tracking]);
});

kent.funcs.bubble = function() {

	window.setTimeout(function() {
		var bubble = new google.bookmarkbubble.Bubble();
		var parameter = 'bmb';
		bubble.hasHashParameter = function() {
			return window.localStorage.getItem(parameter) == 1;
		};
		bubble.setHashParameter = function() {
			if (!this.hasHashParameter()) {
				window.localStorage.setItem(parameter, 1);
			}
		};
        bubble.getViewportHeight = function() {
			return window.innerHeight;
		};
        bubble.getViewportScrollY = function() {
			return window.pageYOffset;
		};
        bubble.registerScrollHandler = function(handler) {
			window.addEventListener('scroll', handler, false);
		};
        bubble.deregisterScrollHandler = function(handler) {        
			window.removeEventListener('scroll', handler, false);
		};
		bubble.showIfAllowed();
	}, 1500);  
}

kent.pages.mobilefreepcstempleman = function() {
	//get the figures from the webservice
	$.post("/mobile/ajax/availability_generator.php", {location: 1}, function(xml) {
		console.log("called webservice");
		$("li[data-room*='2centre'] p[data-value*='free']").text($("level2 > room2", xml).text());
		$("li[data-room*='2centre'] span[data-value*='total']").text($("level2 > room2", xml).attr("total"));
		
		$("li[data-room*='2extension'] p[data-value*='free']").text($("level2 > room1", xml).text());
		$("li[data-room*='2extension'] span[data-value*='total']").text($("level2 > room1", xml).attr("total"));
		
		$("li[data-room*='3extension'] p[data-value*='free']").text($("level3 > room1", xml).text());
		$("li[data-room*='3extension'] span[data-value*='total']").text($("level3 > room1", xml).attr("total"));
		
		$("li[data-room*='4centre'] p[data-value*='free']").text($("level4 > room2", xml).text());
		$("li[data-room*='4centre'] span[data-value*='total']").text($("level4 > room2", xml).attr("total"));
		
		$("li[data-room*='4extension'] p[data-value*='free']").text($("level4 > room1", xml).text());
		$("li[data-room*='4extension'] span[data-value*='total']").text($("level4 > room1", xml).attr("total"));
		
	});
	if(kent.vars.currentPage == "freepcstempleman") {
		setTimeout(kent.pages.freepcstempleman, 10000);
	}
}

kent.pages.mobilefreepcscampus = function() {
	console.log("in freepcscampus");
	$.post("/mobile/ajax/availability_generator.php", {location: 2}, function(xml) {
		console.log("webservice called");
		$("li[data-room*='eliot1'] p[data-value*='free']").text($("eliot > room1", xml).text());
		$("li[data-room*='eliot1'] span[data-value*='total']").text($("eliot > room1", xml).attr("total"));
		
		$("li[data-room*='eliot2'] p[data-value*='free']").text($("eliot > room2", xml).text());
		$("li[data-room*='eliot2'] span[data-value*='total']").text($("eliot > room2", xml).attr("total"));
		
		$("li[data-room*='rutherford1'] p[data-value*='free']").text($("rutherford > room1", xml).text());
		$("li[data-room*='rutherford1'] span[data-value*='total']").text($("rutherford > room1", xml).attr("total"));
		
		$("li[data-room*='rutherford2'] p[data-value*='free']").text($("rutherford > room2", xml).text());
		$("li[data-room*='rutherford2'] span[data-value*='total']").text($("rutherford > room2", xml).attr("total"));
		
		$("li[data-room*='keynes1'] p[data-value*='free']").text($("keynes > room1", xml).text());
		$("li[data-room*='keynes1'] span[data-value*='total']").text($("keynes > room1", xml).attr("total"));
		
		$("li[data-room*='keynes2'] p[data-value*='free']").text($("keynes > room2", xml).text());
		$("li[data-room*='keynes2'] span[data-value*='total']").text($("keynes > room2", xml).attr("total"));
		
		$("li[data-room*='darwin1'] p[data-value*='free']").text($("darwin > room1", xml).text());
		$("li[data-room*='darwin1'] span[data-value*='total']").text($("darwin > room1", xml).attr("total"));
		
		$("li[data-room*='darwin2'] p[data-value*='free']").text($("darwin > room2", xml).text());
		$("li[data-room*='darwin2'] span[data-value*='total']").text($("darwin > room2", xml).attr("total"));
		
		$("li[data-room*='darwin3'] p[data-value*='free']").text($("darwin > room3", xml).text());
		$("li[data-room*='darwin3'] span[data-value*='total']").text($("darwin > room3", xml).attr("total"));
		
		$("li[data-room*='cornwallis1'] p[data-value*='free']").text($("cornwallis > room1", xml).text());
		$("li[data-room*='cornwallis1'] span[data-value*='total']").text($("cornwallis > room1", xml).attr("total"));
		
		$("li[data-room*='cornwallis2'] p[data-value*='free']").text($("cornwallis > room2", xml).text());
		$("li[data-room*='cornwallis2'] span[data-value*='total']").text($("cornwallis > room2", xml).attr("total"));
		
		$("li[data-room*='cornwallis3'] p[data-value*='free']").text($("cornwallis > room3", xml).text());
		$("li[data-room*='cornwallis3'] span[data-value*='total']").text($("cornwallis > room3", xml).attr("total"));
		
		$("li[data-room*='cornwallis4'] p[data-value*='free']").text($("cornwallis > room4", xml).text());
		$("li[data-room*='cornwallis4'] span[data-value*='total']").text($("cornwallis > room4", xml).attr("total"));
		
		$("li[data-room*='cornwallis5'] p[data-value*='free']").text($("cornwallis > room5", xml).text());
		$("li[data-room*='cornwallis5'] span[data-value*='total']").text($("cornwallis > room5", xml).attr("total"));
		
		$("li[data-room*='krdc1'] p[data-value*='free']").text($("rdbuilding > room1", xml).text());
		$("li[data-room*='krdc1'] span[data-value*='total']").text($("rdbuilding > room1", xml).attr("total"));
	});
	
	if(kent.vars.currentPage == "freepcscampus") {
		setTimeout(kent.pages.freepcscampus, 10000);
	}
}