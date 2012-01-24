app.subapps.help.views.HelpConnectivity = Ext.extend(Ext.Panel, {
	id: 'help_connectivity',
	layout: 'fit',
	dockedItems: [{
		id: 'help_connectivity_toolbar',
		app: 'help',
		xtype: 'subapptoolbar',
		title: 'Connectivity',
		items: [{
			ui: 'back',
			text: 'Back',
			handler: function () {
				Ext.dispatch({
					controller: 'help',
					action: 'home',
					historyUrl: '/help/home',
					backToRoot: true
				});
			}
		}]
	}],
	items: [{
		xtype: 'list',
		id: 'help_connectivity_list',
		itemTpl : '<div class="arrow"></div>{name}',
		indexBar: true,
		store: app.subapps.help.stores.connectivityCategories,
		
		listeners: {
			selectionchange: function(selectionModel,selection) {
				if (selection[0]) {
					Ext.dispatch({
						controller: 'help',
						action: 'device',
						historyUrl: "/help/connectivity/device/"+selection[0].get('id'),
						animate: {type:'slide', direction:'left'},
						id: selection[0].get('id'),
						title: selection[0].get('name'),
					});
				}
			}
		},
		
	},
	
	],
	
	listeners: {
		activate: function () {
			Ext.getCmp('help_connectivity_list').deselect(Ext.getCmp('help_connectivity_list').getSelectedRecords()[0]);
		}
	}
	
	
});
