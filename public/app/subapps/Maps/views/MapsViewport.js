app.subapps.maps.views.Viewport = Ext.extend(Ext.TabPanel, {
	id: 'maps',
	cardSwitchAnimation: false,
	tabBar: {
		dock: 'bottom',
		layout: {pack:'center'},
		listeners: {
			change: function (tabbar,tab,tabcard) {
				if (tabcard.route.action == 'buildings' && app.subapps.maps.controller.lastBuildingAction) {
					Ext.dispatch(app.subapps.maps.controller.lastBuildingAction);
				} else { 
					Ext.dispatch(tabcard.route);
				}
			}
		}
	},
	items: [
		new app.subapps.maps.views.MapsMap(),
		new app.subapps.maps.views.MapsCampuses(),
		new app.subapps.maps.views.MapsBuildings(),
		new app.subapps.maps.views.MapsTravel()
	]
});
