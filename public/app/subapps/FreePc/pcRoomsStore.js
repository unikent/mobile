app.subapps.freePc.stores.pcRooms = new Ext.data.JsonStore({
	model  : 'PcRoom',
	sorters: 'name',
	getGroupString : function(record) {
		return record.get('group');
	},
	proxy: {
		type: 'ajax',
		url : '../pc-availability.json',
		reader: {
			type: 'json',
			root: 'pcRooms'
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
