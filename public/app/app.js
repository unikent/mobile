Ext.setup({
	phoneStartupScreen: 'images/start.png',
	icon: 'images/icon.png',
	glossOnIcon: false,
	statusBarStyle: 'black',
	onReady: function () {
	}
});

Ext.regApplication({
	name: 'app',
	defaultUrl: "/",
	useHistory: true,
	launch: function() {
		this.launched = true;
		this.mainLaunch();
	},
	subapps: [],
	subapp_models: [],
	subapp_launcher_models: [],
	mainLaunch: function() {

		device = true;
		if (!device || !this.launched) {return;}

		app.views.viewport = new app.views.Viewport();
		Ext.getBody().setStyle('background','#333');
	},

	regSubApp: function (options) {
		app.subapps[options.name] = new Ext.SubApp(options);
		app.subapp_models.push(Ext.ModelMgr.create({
			name: options.name,
			title: options.title,
			iconTitle: options.iconTitle,
			display_in_app_browser: options.display_in_app_browser,
			app: app.subapps[options.name],
			itemCls: options.itemCls
		}, 'SubApp'));
	},

	regLauncher: function (options) {
		app.subapps[options.name] = new Ext.SubApp(options);
		app.subapp_launcher_models.push( Ext.ModelMgr.create({
			name: options.name,
			title: options.title,
			iconTitle: options.iconTitle,
			display_in_app_browser: options.display_in_app_browser,
			app: app.subapps[options.name],
			href: options.href,
			external: true,
			target: "_blank",
			itemCls: 'external',
			html: options.html
		}, 'Launcher'));
	}
});
