app.subapps.travel.views.Viewport = Ext.extend(Ext.Panel, {
	id: 'travel_viewport',
	fullscreen: true,
	layout: 'card',
	bodyPadding: "10px",
	scroll: 'verticle',
	dockedItems: [{
		id: 'travel_toolbar',
		app: 'travel',
		xtype: 'subapptoolbar',
		title: 'Travel'
	}],
	html: "<p>Here are some useful links for planning your travel to the University of Kent</p> \
	<h2><a href='http://www.nextbuses.mobi/WebView/BusStopSearch/BusStopSearchResults?id=CT2+7NW&submit=Search'>NextBuses for Canterbury campus</a></h2> \
	<h2><a href='http://arrivabus.mobi/mobile/List.aspx?txt=Chatham&stype=Town&reg=UK'>Arriva buses for Medway campus</a></h2> \
	<h2><a href='http://m.nationalrail.co.uk/pj/pj'>National Rail</a></h2> \
	<h2><a href='http://www.bbc.co.uk/mobile/travelnews/search/feed/top/England/format/xhtml/sub/South/q/Kent/showFilters/true'>BBC Kent Travel News</a></h2>"
});

