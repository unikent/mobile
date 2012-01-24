Ext.regModel('SubApp', {
	fields: [
		'name',
		'title',
		'iconTitle',
		{name: 'display_in_app_browser',type:'boolean',defaultValue: true},
		'app',
		'itemCls',
		'html'
	]
});

Ext.SubApp = Ext.extend(Ext.Controller,{
	launched: false,
	constructor: function (config) {
		this.init();
		Ext.SubApp.superclass.constructor.call(this, config);
		this.addEvents(
			'beforelaunch',
			'launch',
			'beforeactivate',
			'activate',
			'beforeresume',
			'resume'
		);
		this.views = {};
		this.stores = {};
	},
	init: function () {},
	launch: function () {
		if (!this.launched) {
			this.fireEvent('beforelaunch', this);
			// if the sub app has a viewport add it to the applicaiton
			if (this.views.Viewport !== undefined) {
				this.views.viewport = new this.views.Viewport();
				app.views.viewport.add(this.views.viewport);
				app.views.viewport.doLayout();
			}
			this.launched = true;
			this.fireEvent('launched', this);
		}
	},
	activate: function (animate) {

		if (!this.launched) {
			this.launch();
		}
		this.fireEvent('beforeactivate', this);

		if (animate === undefined) {
			animate = true;
			app.views.viewport.setActiveItem(this.views.viewport,true ? 'pop' : false);
		}
		else {
			app.views.viewport.setActiveItem(this.views.viewport, animate);
		}
		this.fireEvent('activate', this);
	},

	resume: function(animate) {
		this.fireEvent('beforeresume', this);
		if (this.controller && this.controller.lastAction) {
			Ext.dispatch(Ext.apply(this.controller.lastAction,{animation: animate}));
		}
		this.fireEvent('resume', this);
	}
});
