var _gaq = _gaq || [];
_gaq.push(['_setAccount', config.google_analytics]);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

Ext.Dispatcher.on('dispatch',function(interaction) {
	_gaq.push(['_trackPageview', interaction.historyUrl]);
	sitestatUpdate(interaction.historyUrl);
});

var _sitestatGif = _sitestatGif || new Image();
var sitestatUpdate = function(path) {

	//convert path to sitestat couter
	if(path == "/") { path = "/index";}
	var counter = "mobile" + path.replace(/\//g, ".");

	ns_l = '&amp;ns__t='+(new Date()).getTime();
	ns_pixelUrl=ns_l; 
	ns_0=document.referrer; 
	ns_0=(ns_0.lastIndexOf('/')==ns_0.length-1)?ns_0.substring(ns_0.lastIndexOf('/'),0):ns_0; 
	if(ns_0.length>0){ns_l+='&amp;ns_referrer='+escape(ns_0)};

	_sitestatGif.src = "http://uk.sitestat.com/kent/kent-ext/s?"+counter+"&amp;subdomain=www&amp;category=none"+ns_l;
	
}