app.subapps.help.views.HelpMain = Ext.extend(Ext.Panel, {
	id: 'help_main',
	layout: 'card',
	items: [
		new app.subapps.help.views.HelpPages(),
		new app.subapps.help.views.HelpConnectivity(),
		new app.subapps.help.views.HelpFeedback(),
		new app.subapps.help.views.HelpConnectivityDevice(),
		new app.subapps.help.views.HelpConnectivityDeviceDetails(),
	],
	
});