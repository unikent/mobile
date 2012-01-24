app.subapps.maps.views.MapsBuildingsList = Ext.extend(Ext.Panel,{
	id: 'maps_buildings_list',
	layout: 'fit',
	dockedItems: [{
		xtype: 'subapptoolbar',
		id: 'maps_buildings_list_toolbar',
		title:'Buildings: Canterbury',
		app:'maps',
	}],
	items: [{
		xtype: 'list',
		id: 'maps_buildings_list_list',
		itemTpl : '{name}',
		grouped: true,
		indexBar: true,
		store: app.subapps.maps.stores.buildings,
		listeners: {
			selectionchange: function(selectionModel,selection) {
				if (selection[0]) {
					Ext.dispatch({
						controller: 'maps',
						action: 'building',
						historyUrl: "/maps/building/"+selection[0].get('id'),
						id: selection[0].get('id')
					});
				}
			}
		}
	}],
	listeners: {
		activate: function () {
			Ext.getCmp('maps_buildings_list_list').deselect(Ext.getCmp('maps_buildings_list_list').getSelectedRecords()[0]);
		}
	}
});