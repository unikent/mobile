app.subapps.maps.stores.campuses = new Ext.data.JsonStore({
	model  : 'Campus',
	sorters: 'name',
	getGroupString : function(record) {
		return record.get('name')[0];
	},
	proxy: {
		type: 'ajax',
		url : 'json/campuses.json',
		reader: {
			type: 'json',
			root: 'campuses'
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