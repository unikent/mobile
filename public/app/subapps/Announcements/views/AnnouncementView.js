app.subapps.Announcement.views.View = Ext.extend(Ext.Panel, {
	id: 'announcement_view',
	fullscreen: true,
	layout: 'card',
	bodyPadding: "10px",
	dockedItems: [{
		id: 'announcement_toolbar',
		app: 'Announcment',
		xtype: 'subapptoolbar',
		items: [{
			ui: 'back',
			text: 'Back',
			handler: function () {
				Ext.dispatch({
					controller: 'Announcement',
					action: 'list',
					historyUrl: '/news',
					backToRoot: true,
					animate: {type:'slide', direction:'right'}
				});
			}
		}]
	}],
	html: "loading..."
});