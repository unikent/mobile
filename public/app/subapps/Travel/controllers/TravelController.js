app.subapps.travel.controller = Ext.regController('travel',{
	lastAction: {
		controller: 'travel',
		action: 'home',
		historyUrl: '/travel/home'
	},

	_index: function (options) {
		app.subapps.travel.activate(options.animation);
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
	}

});
