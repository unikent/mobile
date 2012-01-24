app.subapps.maps.views.MapsCampusesList = Ext.extend(Ext.Panel,{
	id: 'maps_campuses_list',
	layout: 'fit',
	dockedItems: [{
		xtype: 'subapptoolbar',
		id: 'maps_campuses_list_toolbar',
		title:'Campuses',
		app: 'maps',
	}],
	items: [{
		xtype: 'list',
		id: 'maps_campuses_list_list',
		itemTpl : '<div class="arrow"></div>{name}',
		grouped: false,
		indexBar: false,
		store: app.subapps.maps.stores.campuses,
		listeners: {
			selectionchange: function(selectionModel,selection) {
				if (selection[0]) {
					Ext.dispatch({
						controller: 'maps',
						action: 'campus',
						historyUrl: "/maps/campus/"+selection[0].get('id'),
						id: selection[0].get('id')
					});
				}
			}
		}
	}],
	listeners: {
		activate: function () {
			Ext.getCmp('maps_campuses_list_list').deselect(Ext.getCmp('maps_campuses_list_list').getSelectedRecords()[0]);
		}
	}
});
