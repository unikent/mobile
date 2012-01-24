app.subapps.help.views.HelpPages = Ext.extend(Ext.Panel, {
	id: 'help_pages',
	layout: 'fit',
	dockedItems: [{
		id: 'help_toolbar',
		app: 'help',
		xtype: 'subapptoolbar',
		title: 'Help',
	}],
	items: [{
		id: 'help_pages_list',
		xtype: 'list',
		itemTpl : '<div class="arrow"></div>{name}',
		indexBar: true,
		store: app.subapps.help.stores.pages,
		listeners: {
			selectionchange: function(selectionModel,selection) {
				if (selection[0]) {
					Ext.dispatch({
						controller: selection[0].get('appName'),
						action: selection[0].get('action'),
						historyUrl: "/"+selection[0].get('appName')+"/"+selection[0].get('action'),
						animate: {type:'slide', direction:'left'},
						id: selection[0].get('appName'),
						url: selection[0].get('url'),
					});
				}
			}
		}
	}],
	
	listeners: {
		activate: function () {
			Ext.getCmp('help_pages_list').deselect(Ext.getCmp('help_pages_list').getSelectedRecords()[0]);
		}
	}

});