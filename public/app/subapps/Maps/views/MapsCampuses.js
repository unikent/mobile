app.subapps.maps.views.MapsCampuses = Ext.extend(Ext.Panel,{
	id: 'maps_campuses',
	title: 'Campuses',
	layout: 'fit',
	iconCls: 'campus',
	route: {
		controller: 'maps',
		action: 'campuses',
		historyUrl: "/maps/campuses"
	},
	layout: 'card',
	cardSwitchAnimation: 'slide',
	items: [
		new app.subapps.maps.views.MapsCampusesList(),
		new app.subapps.maps.views.MapsCampusesCampus(),
	]
});
