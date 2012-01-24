app.subapps.help.views.HelpConnectivityDevice = Ext.extend(Ext.Panel, {
	id: 'help_connectivity_device',
	layout: 'fit',
	dockedItems: [{
		id: 'help_connectivity_device_toolbar',
		app: 'help',
		xtype: 'subapptoolbar',
		items: [{
			ui: 'back',
			text: 'Back',
			handler: function () {

				if(app.subapps.help.views.HelpConnectivityDevice.goHome){
					Ext.dispatch({
						controller: 'help',
						action: 'home',
						historyUrl: '/help/home',
						animate: {type:'slide', direction:'right'},
					});

				}else{	
					Ext.dispatch({
						controller: 'help',
						action: 'connectivity',
						historyUrl: '/help/connectivity',
						animate: {type:'slide', direction:'right'},
					});
					
				}
			}
		}]
	}],
	
	items: [{
		store: app.subapps.help.stores.connectivityFeed,
		xtype: 'list',
		id: 'help_connectivity_details_list',
		itemTpl : '<div class="arrow"></div>{title}',
		indexBar: true,
		emptyText: "Sorry, we're unable to display the details for that device right now. Please try again later.",
		
		listeners: {
			selectionchange: function(selectionModel,selection) {
				if (selection[0]) {	


					if(app.subapps.help.views.HelpConnectivityDevice.goHome){
						Ext.dispatch({
							controller: 'help',
							action: 'details',
							historyUrl: '/help/webappfaq/'+selectionModel.store.indexOfId(selection[0].internalId),
							animate: {type:'slide', direction:'left'},
							id: app.subapps.help.views.HelpConnectivityDevice.id,
							title: app.subapps.help.views.HelpConnectivityDevice.title,
							index: selectionModel.store.indexOfId(selection[0].internalId),
						});

					}else{
						Ext.dispatch({
							controller: 'help',
							action: 'details',
							historyUrl: '/help/connectivity/device/'+app.subapps.help.views.HelpConnectivityDevice.id+'/'+selectionModel.store.indexOfId(selection[0].internalId),
							animate: {type:'slide', direction:'left'},
							id: app.subapps.help.views.HelpConnectivityDevice.id,
							title: app.subapps.help.views.HelpConnectivityDevice.title,
							index: selectionModel.store.indexOfId(selection[0].internalId),
						});
						
					}
					
				}
			}
		},
		
	}],
	
	listeners: {
		activate: function () {
			Ext.getCmp('help_connectivity_details_list').deselect(Ext.getCmp('help_connectivity_details_list').getSelectedRecords()[0]);
		}
	}
	
});