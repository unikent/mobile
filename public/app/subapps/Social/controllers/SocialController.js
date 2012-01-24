app.subapps.Social.controller = Ext.regController('Social',{
	lastAction: {
		controller: 'Social',
		action: 'home',
		historyUrl: '/social',
	},
	
	_index: function (options) {
		app.subapps.Social.activate(options.animation);
	},
	index: function(options) {
		this._index(options);
		Ext.dispatch(this.lastAction);
	},
	home: function(options){
		this._index(options);
	}

});
