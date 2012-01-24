app.subapps.Announcement.views.Viewport = Ext.extend(Ext.Panel, {
	id: 'announcement_viewport',
	fullscreen: true,
	layout: 'card',
	items: [
		new app.subapps.Announcement.views.List(),
		new app.subapps.Announcement.views.View()
	]
});


