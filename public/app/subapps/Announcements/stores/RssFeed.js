app.subapps.Announcement.stores.RssFeed = new Ext.data.Store({
	model  : 'RssFeed',
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