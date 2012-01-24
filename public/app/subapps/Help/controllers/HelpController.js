app.subapps.help.controller = Ext.regController('help',{
	lastAction: {
		controller: 'help',
		action: 'home',
		historyUrl: '/help/home',
	},
	
	_index: function (options) {
		if (!options.app) {
			options.app = 'appBrowser';
		}
		app.views.viewport.appName = options.app;
		app.subapps.help.activate(options.animate);
		Ext.getCmp('help').setActiveItem('help_main');
	},
	
	index: function(options) {
		this._index(options);
		Ext.dispatch(this.lastAction);
	},
	
	home: function(options) {
		this._index(options);
		Ext.getCmp('help_main').setActiveItem('help_pages',!options.appLaunch ? {type:'slide', direction:'right'} : false);
		this.lastAction = options;
	},
	
	pages: function(options) {
		this._index(options);
		Ext.getCmp('help').setActiveItem('help_main',!options.appLaunch ? {type:'slide', direction:'right'} : false);
		this.lastAction = options;
	},
	
	connectivity: function(options) {
		this._index(options);
		Ext.getCmp('help_main').setActiveItem('help_connectivity',!options.appLaunch ? options.animate : false);
		this.lastAction = options;
	},
	
	device: function(options) {
		this._index(options);
		Ext.getCmp('help_main').setActiveItem('help_connectivity_device',!options.appLaunch ? options.animate : false);
		this.lastAction = options;
		
		app.subapps.help.views.HelpConnectivityDevice.id = options.id;
		
		// use the device id (eg 'android' to find the relevant item in the data source
		var index = app.subapps.help.stores.connectivityCategories.find('id', options.id);
		
		// get the url and name
		app.subapps.help.views.HelpConnectivityDevice.goHome = false;
		app.subapps.help.views.HelpConnectivityDevice.url = app.subapps.help.stores.connectivityCategories.getAt(index).data.url;
		app.subapps.help.views.HelpConnectivityDevice.title = app.subapps.help.stores.connectivityCategories.getAt(index).data.name;
		
		// set the title in the toolbar
		Ext.getCmp('help_connectivity_device_toolbar').setTitle(app.subapps.help.views.HelpConnectivityDevice.title);
		
		var tempProxyUrl = 'xml/connectivityFeedTest.xml';
		if (!config.local_device_feed) {
			tempProxyUrl = 'xml/connectivityFeed.php?url='+app.subapps.help.views.HelpConnectivityDevice.url;
		}
			
		// only load the connectivity feed if it's not already loaded, or it is loaded but the url is different from the one we need
		if (!app.subapps.help.stores.connectivityFeed.loaded || app.subapps.help.stores.connectivityFeed.proxy.url != tempProxyUrl) {
			// set the data source's proxy url for the ajax call, if we're not in local test mode
			app.subapps.help.stores.connectivityFeed.proxy.url = tempProxyUrl;
			app.subapps.help.stores.connectivityFeed.load();
			app.subapps.help.stores.connectivityFeed.loaded = true;
		}
		
		
		
	},
	webappfaq: function(options){
		options.name = 'WebApp FAQ';
		if(typeof options.url == undefined || options.url == null){
			options.url= app.subapps.help.stores.pages.findRecord("name",options.name).data.url
		}
		this.list_xml(options);

	},
	list_xml: function(options) {

		this._index(options);
		Ext.getCmp('help_main').setActiveItem('help_connectivity_device',!options.appLaunch ? options.animate : false);

		this.lastAction = options;
		// get the url and name
		app.subapps.help.views.HelpConnectivityDevice.goHome = true;
		app.subapps.help.views.HelpConnectivityDevice.url = options.url;
		app.subapps.help.views.HelpConnectivityDevice.title = options.name;
		
		// set the title in the toolbar
		Ext.getCmp('help_connectivity_device_toolbar').setTitle(app.subapps.help.views.HelpConnectivityDevice.title);
		
		
		var tempProxyUrl = 'xml/connectivityFeedTest.xml';
		if (!config.local_device_feed) {
			tempProxyUrl = 'xml/connectivityFeed.php?url='+app.subapps.help.views.HelpConnectivityDevice.url;
		}
			
		// only load the connectivity feed if it's not already loaded, or it is loaded but the url is different from the one we need
		if (!app.subapps.help.stores.connectivityFeed.loaded || app.subapps.help.stores.connectivityFeed.proxy.url != tempProxyUrl) {
			// set the data source's proxy url for the ajax call, if we're not in local test mode
			app.subapps.help.stores.connectivityFeed.proxy.url = tempProxyUrl;
			app.subapps.help.stores.connectivityFeed.load();
			app.subapps.help.stores.connectivityFeed.loaded = true;
		}

	},
	webapp_reload: function(options){
		app.subapps.help.views.HelpConnectivityDevice.goHome = true;
		options.type='webapp';
		this.details_reload(options);

	},
	details_reload: function(options){

		if(options.type=='webapp'){
			t_url = app.subapps.help.stores.pages.findRecord("name","WebApp FAQ").data.url;
		}else{
			index = app.subapps.help.stores.connectivityCategories.find('id', options.id);
			t_url = app.subapps.help.stores.connectivityCategories.getAt(index).data.url;
		}
	

		

		var tempProxyUrl = 'xml/connectivityFeedTest.xml';
		if (!config.local_device_feed) {
			tempProxyUrl = 'xml/connectivityFeed.php?url='+t_url;
		}
		var lthis = this;	
		// only load the connectivity feed if it's not already loaded, or it is loaded but the url is different from the one we need
		if (!app.subapps.help.stores.connectivityFeed.loaded || app.subapps.help.stores.connectivityFeed.proxy.url != tempProxyUrl) {
			// set the data source's proxy url for the ajax call, if we're not in local test mode
			app.subapps.help.stores.connectivityFeed.proxy.url = tempProxyUrl;
			app.subapps.help.stores.connectivityFeed.load(function(a,b,c){ lthis.details(options); });
			app.subapps.help.stores.connectivityFeed.loaded = true;
		}		
	},
	details: function(options) {
		this._index(options);
		
		Ext.getCmp('help_main').setActiveItem('help_connectivity_device_details',!options.appLaunch ? options.animate : false);
		Ext.getCmp('help_connectivity_device_details_toolbar').setTitle(options.title);
		this.lastAction = options;
		
		app.subapps.help.views.HelpConnectivityDeviceDetails.id = options.id;
		app.subapps.help.views.HelpConnectivityDeviceDetails.title = options.title;
		app.subapps.help.views.HelpConnectivityDeviceDetails.index = options.index;
		
		//options.id;
		var html = app.subapps.help.stores.connectivityFeed.data.items[options.index].data.encoded;
		var newHtml = html.replace(/\<a href\=\"http\:\/\/blogs\.kent\.ac\.uk\/mobiledevices\/.+\"\>Report post\<\/a\>/, '');
		var title = app.subapps.help.stores.connectivityFeed.data.items[options.index].data.title;
		Ext.getCmp('help_connectivity_device_details').update(newHtml);
		Ext.getCmp('help_connectivity_device_details_toolbar').setTitle(title);
	},
	
	inApp: function (options) {

		if (!options.animate) {
			options.animate = {type:'slide', direction:'up', cover: true};
		}
		this._index(options);
		Ext.getCmp('help').setActiveItem('help_inapp');
		if(app.subapps[options.app].helptext) {
			Ext.getCmp('help_text').update(app.subapps[options.app].helptext);
		} else if (app.subapps.help.defaultHelptext) {
			Ext.getCmp('help_text').update(app.subapps.help.defaultHelptext);
		} else {
			Ext.getCmp('help_text').update("");
		}
	},
	
	feedback: function(options) {
		this._index(options);
		Ext.getCmp('help_main').setActiveItem('help_feedback',!options.appLaunch && options.animateInApp !== false ? {type:'slide', direction:'left'} : false);
		this.lastAction = options;
	},
	
	submit: function(options) {
		if (options.message == '') {
			Ext.Msg.alert('No message', 'Please enter a message.');
		}
		else {
			var info = "Agent: "+navigator.userAgent+"\n";
			info += "App name: "+options.appName+"\n";
			info += "Action: "+options.actionName+"\n";
			info += "App url: "+options.appUrl+"\n";
			info += "Feedback form url: "+options.formUrl;

			Ext.Ajax.request({
				url : 'json/feedbackRemote',
				params : { email : options.emailField.getValue(), message : options.messageField.getValue(), info: info, appName: options.appName },
				method: 'post',
				success: function (result, request) {
					if (result.responseText == 'true') {
						Ext.Msg.alert('Feedback sent', 'Thank you for your feedback.', Ext.emptyFn);
						options.emailField.setValue('');
						options.messageField.setValue('');
					}
					else {
						Ext.Msg.alert('Feedback not sent', 'There seems to have been a problem sending your message. Please try again later.');
					}
				},
				failure: function (result, request) { 
					Ext.Msg.alert('Feedback not sent', 'There seems to have been a problem sending your message. Please try again later.');
				} 
			});
		}
	}
	

});
