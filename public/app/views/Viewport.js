app.views.Viewport = Ext.extend(Ext.Panel, {
	fullscreen: true,
	layout: 'card',
	style: "background:none;",
	cardSwitchAnimation: 'pop',
	listeners: {
		'cardswitch': {
			fn: function(container, newCard, oldCard) {
				// console.log(app.subapps.appBrowser.views);
				if (newCard == app.subapps.appBrowser.views.viewport) {
					// app.subapps.appBrowser.views.viewport.list.deselect(app.subapps.appBrowser.views.viewport.list.getSelectedRecords()[0]);
				}
			}
		}
	}
});