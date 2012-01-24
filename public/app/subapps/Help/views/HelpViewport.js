app.subapps.help.views.Viewport = Ext.extend(Ext.Panel, {
	id: 'help',
	fullscreen: true,
	layout: 'card',
	items: [
		new app.subapps.help.views.HelpMain(),
		new app.subapps.help.views.HelpInApp()
	]
});

