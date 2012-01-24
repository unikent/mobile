app.subapps.maps.stores.buildings = new Ext.data.JsonStore({
	model  : 'Building',
	sorters: 'name',
	getGroupString : function(record) {
		return record.get('name')[0];
	},
	proxy: {
		type: 'ajax',
		url : 'json/buildings.json',
		reader: {
			type: 'json',
			root: 'buildings'
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