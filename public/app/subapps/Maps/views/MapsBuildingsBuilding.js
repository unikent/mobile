app.subapps.maps.views.MapsBuildingsBuilding = Ext.extend(Ext.Panel,{
	id: 'maps_buildings_building',
	dockedItems: [{
		xtype: 'subapptoolbar',
		id: 'maps_buildings_building_toolbar',
		title:'Loading...',
		app: 'maps',
		items: [{
			ui: 'back',
			text: 'Back',
			handler: function () {
				Ext.dispatch({
					controller: 'maps',
					action: 'buildingsList',
					historyUrl: '/maps/buildings/list',
					backToRoot: true
				});
			}
		}]
	}],
	items: [{
		id: "maps_buildings_building_map",
		xtype: 'leaflet',
		locate: true
	}]
});