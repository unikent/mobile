app.subapps.help.stores.connectivityFeed = new Ext.data.Store({
	model  : 'ConnectivityFeed',
	sorters: 'title',
	proxy: {
		type: 'ajax',
		reader: {
			type: 'xml',
			root: 'channel',
			record: 'item',
		},
	},
	loaded: false,
	autoLoad: false,
	listeners: {
		load: function() {
			this.loaded = true;
		}
	}
});


