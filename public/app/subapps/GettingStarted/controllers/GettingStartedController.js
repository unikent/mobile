app.subapps.gettingStarted.controller = Ext.regController('gettingStarted',{
	lastAction: {
		controller: 'gettingStarted',
		action: 'home',
		historyUrl: '/getting-started/home',
	},
	
	_index: function (options) {
		if (!options.app) {
			options.app = 'appBrowser';
		}
		app.views.viewport.appName = options.app;
		app.subapps.gettingStarted.activate(options.animate);
		Ext.getCmp('getting_started').setActiveItem('getting_started_home');
	},
	
	index: function(options) {
		this._index(options);
		Ext.dispatch(this.lastAction);
	},
	
	home: function(options) {
		this._index(options);
		this.lastAction = options;
		Ext.Ajax.request({
			url : 'html/gettingstarted.html',
			success: function (result, request) {
				Ext.getCmp('getting_started_home').update(result.responseText, true);
			},
			failure: function (result, request) { 
				Ext.getCmp('getting_started_home').update("Oops, there's been a problem. Please try again later", true);
			} 
		});
	},
	

});
