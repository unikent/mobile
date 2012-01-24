app.subapps.gettingStarted.views.Viewport = Ext.extend(Ext.Panel, {
	id: 'getting_started',
	fullscreen: true,
	layout: 'card',
	items: [
		new app.subapps.gettingStarted.views.home()
	]
});

