app.subapps.maps.views.MapsMap = Ext.extend(Ext.Panel,{
	id: 'maps_map',
	layout: 'fit',
	title: 'Map',
	iconCls: 'map',
	route: {
		controller: 'maps',
		action: 'map',
		historyUrl: "/maps/map"
	},
	dockedItems: [{
		xtype: 'subapptoolbar',
		id: "maps_map_toolbar",
		title: 'Map',
		app: 'maps',
	}],
	items: [{
		xtype: 'leaflet',
		id: "maps_map_map",
		locate: true
	}]
});