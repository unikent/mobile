app.subapps.maps.views.MapsBuildings = Ext.extend(Ext.Panel,{
	id: 'maps_buildings',
	title: 'Buildings',
	layout: 'fit',
	iconCls: 'building',
	route: {
		controller: 'maps',
		action: 'buildings',
		historyUrl: "/maps/buildings"
	},
	layout: 'card',
	cardSwitchAnimation: 'slide',
	items: [
		new app.subapps.maps.views.MapsBuildingsList(),
		new app.subapps.maps.views.MapsBuildingsBuilding()
	]
});
