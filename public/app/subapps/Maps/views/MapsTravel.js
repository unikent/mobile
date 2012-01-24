app.subapps.maps.views.MapsTravel = Ext.extend(Ext.Panel,{
	id: 'maps_travel',
	layout: 'card',
	title: 'Directions',
	iconCls: 'travel',
	route: {
		controller: 'maps',
		action: 'travelCampuses',
		historyUrl: "/maps/travel/campuses"
	},
	listeners: {
		render: function () {

			app.subapps.maps.views.nestedList = new Ext.NestedListWithHtmlLeaf({
				title: 'Travel Directions',
				useTitleAsBackText: false,
				displayField: 'text',
				leafBodyField: 'body',
				toolbar: {app: 'maps'},
				store: app.subapps.maps.stores.travelInfo
			});

			this.add(app.subapps.maps.views.nestedList);
			
		}
	}
});