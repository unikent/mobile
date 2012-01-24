app.subapps.Announcement.controller = Ext.regController('Announcement',{
	lastAction: {
		controller: 'Announcement',
		action: 'home',
		historyUrl: '/news'
	},

	_index: function (options) {
		app.subapps.Announcement.activate(options.animation);
	},
	index: function(options) {
		this._index(options);
		Ext.dispatch(this.lastAction);
	},
	home: function(options){

		this.list(options);
	},

	getFeed: function(url,callback){

		var feed = app.subapps.Announcement.stores.RssFeed;

		var tempProxyUrl = 'xml/connectivityFeedTest.xml';
		if (!config.local_device_feed) {
			tempProxyUrl = 'xml/connectivityFeed.php?url='+url;
		}
		if (!feed.loaded || feed.proxy.url != tempProxyUrl) {
			// set the data source's proxy url for the ajax call, if we're not in local test mode
			feed.proxy.url = tempProxyUrl;
			feed.load(function(){
				if(typeof callback == 'function'){ callback(app.subapps.Announcement.stores.RssFeed); }
			});
			feed.loaded = true;
		}else{
			if(typeof callback == 'function'){callback(app.subapps.Announcement.stores.RssFeed);}
		}


	},
	list: function(options){
		this._index(options);
		this.getFeed("http://www.kent.ac.uk/student/rss.html");
		Ext.getCmp('announcement_viewport').setActiveItem('announcement_list',!options.appLaunch ? {type:'slide', direction:'right'} : false);
	},
	view: function(options){
		this._index(options);
		this.getFeed("http://www.kent.ac.uk/student/rss.html", function(store){

			Ext.getCmp('announcement_viewport').setActiveItem('announcement_view',!options.appLaunch ? {type:'slide', direction:'left'} : false);

			var html = store.data.items[options.index].data.description;
			var title = store.data.items[options.index].data.title;
			html = html+' <a href="'+store.data.items[options.index].data.link+'">Read more</a>.';
			//html = html.replace(/\<a href\=\"http\:\/\/blogs\.kent\.ac\.uk\/mobiledevices\/.+\"\>Report post\<\/a\>/, '');
			Ext.getCmp('announcement_toolbar').setTitle(title);
			Ext.getCmp('announcement_view').update(html);

		});
	}

});
