app.onBeforeLaunch = function() {
	var History	= Ext.History,
		useHistory = History && this.useHistory,
		profile	= this.determineProfile(true);

	if (useHistory) {
		this.historyForm = Ext.getBody().createChild({
			id	: 'history-form',
			cls   : 'x-hide-display',
			style : 'display: none;',
			tag   : 'form',
			action: '#',
			children: [
				{
					tag: 'div',
					children: [
						{
							tag : 'input',
							id  : History.fieldId,
							type: 'hidden'
						},
						{
							tag: 'iframe',
							id : History.iframeId
						}
					]
				}
			]
		});

		History.init();
		History.on('change', this.onHistoryChange, this);

		var token = History.getToken();

		if (this.launch.call(this.scope || this, profile) !== false) {
			Ext.redirect(token || this.defaultUrl || {controller: 'application', action: 'index'},true);
		}
	} else {
		this.launch.call(this.scope || this, profile);
	}

	this.launched = true;

	this.fireEvent('launch', this);

	if (this.setProfilesOnLaunch) {
		this.updateComponentProfiles(profile);
	}
};

Ext.Dispatcher.redirect = function(options,appLaunch) {

	if (options instanceof Ext.data.Model) {
		//compose a route for the model
		
	} else if (typeof options == 'string') {
		//use router
		var route = Ext.Router.recognize(options);
		
		if (route) {
			if (appLaunch != undefined) {
				route.appLaunch = appLaunch;
			} else {
				route.appLaunch = false;
			}
			return this.dispatch(route);
		}
	}
	return null;
};

Ext.Dispatcher.dispatch = function(options) {
	var interaction = new Ext.Interaction(options),
		controller  = interaction.controller,
		action  	= interaction.action,
		History 	= Ext.History;
		
	if (interaction.appLaunch != undefined) {
		interaction.appLaunch = options.appLaunch;
	} else {
		interaction.appLaunch = false;
	}
	if (this.fireEvent('before-dispatch', interaction) !== false) {
		if (History && options.historyUrl) {
			History.suspendEvents(false);
			History.add(options.historyUrl);
			Ext.defer(History.resumeEvents, 100, History);
		}
		
		if (controller && action) {
			controller[action].call(controller, interaction);
			interaction.dispatched = true;
		}
		
		this.fireEvent('dispatch', interaction);
	}
};

// Register an xtype for tab bar
Ext.reg('tabbar', Ext.TabBar);

// give numbers the ability to turn in to radians
if (typeof(Number.prototype.toRad) === "undefined") {
	Number.prototype.toRad = function() {
		return this * Math.PI / 180;
	};
}






