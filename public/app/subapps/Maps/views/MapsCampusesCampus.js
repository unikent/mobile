app.subapps.maps.views.MapsCampusesCampus = Ext.extend(Ext.Panel,{
	id: 'maps_campuses_campus',
	dockedItems: [{
		xtype: 'subapptoolbar',
		id: 'maps_campuses_campus_toolbar',
		title:'Loading...',
		app: 'maps',
		items: [{
			ui: 'back',
			text: 'Back',
			handler: function () {
				Ext.dispatch({
					controller: 'maps',
					action: 'campusesList',
					historyUrl: '/maps/campuses/list',
					backToRoot: true
				});
			}
		}]
	}],
	items: [{
		id: "maps_campuses_campus_map",
		xtype: 'leaflet',
		locate: true
	}]
});