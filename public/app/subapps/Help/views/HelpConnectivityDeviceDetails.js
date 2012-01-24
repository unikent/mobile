app.subapps.help.views.HelpConnectivityDeviceDetails = Ext.extend(Ext.Panel, {
	id: 'help_connectivity_device_details',
	scroll: 'vertical',
	layout: 'fit',
	bodyMargin: "20px",
	dockedItems: [{
		id: 'help_connectivity_device_details_toolbar',
		app: 'help',
		xtype: 'subapptoolbar',
		items: [{
			ui: 'back',
			text: 'Back',
			handler: function () {

				if(app.subapps.help.views.HelpConnectivityDevice.goHome){
					Ext.dispatch({
						controller: 'help',
						action: 'webappfaq',
						historyUrl: '/help/webappfaq',
						animate: {type:'slide', direction:'right'},
						id: 'webappfaq',
						title: 'Webapps FAQ'
					});
				}else{
					Ext.dispatch({
						controller: 'help',
						action: 'device',
						historyUrl: '/help/connectivity/device/'+app.subapps.help.views.HelpConnectivityDeviceDetails.id,
						animate: {type:'slide', direction:'right'},
						id: app.subapps.help.views.HelpConnectivityDeviceDetails.id,
						title: app.subapps.help.views.HelpConnectivityDeviceDetails.title,
					});
				}
				
			}
		}]
	}],
});
