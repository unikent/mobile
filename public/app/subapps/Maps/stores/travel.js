app.subapps.maps.stores.travelInfo = new Ext.data.TreeStore({
	model  : 'ListItem',
	sorters: 'name',
	proxy: {
		type: 'ajax',
		url : 'json/travel_info.json',
		reader: {
			type: 'tree',
			root: 'items'
		}
	},
	loaded: false,
	autoLoad: true,
	listeners: {
		load: function() {
			this.loaded = true;
		}
	}
});