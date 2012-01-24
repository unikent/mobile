app.subapps.appBrowser.controller = Ext.regController('appBrowser',{
	
	lastAction: {
		controller: 'appBrowser',
		action: 'index',
		historyUrl: "/",
	},
	
	before: function(options) {

	},	
	index: function (options) {
		app.subapps.appBrowser.activate(options.animation);
		//app.views.viewport.setActiveItem('appBrowser',true ? 'pop' : false);
	}
});