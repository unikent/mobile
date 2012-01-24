app.subapps.Announcement.views.List = Ext.extend(Ext.Panel, {
	id: 'announcement_list',
	layout: 'fit',
	dockedItems: [{
		id: 'announcement_toolbar',
		app: 'Announcment',
		xtype: 'subapptoolbar',
		title: 'News'
	}],
	items: [{
		store: app.subapps.Announcement.stores.RssFeed,
		xtype: 'list',
		id: 'announcement_listing',
		itemTpl : '<div class="arrow"></div>{title}',
		indexBar: true,
		emptyText: "Sorry, we're unable to display announcements at the moment.",

		listeners: {
			selectionchange: function(selectionModel,selection) {
				if (selection[0]) {
					Ext.dispatch({
						controller: 'Announcement',
						action: 'view',
						historyUrl: '/news/view/'+selectionModel.store.indexOfId(selection[0].internalId),
						index: selectionModel.store.indexOfId(selection[0].internalId)
					});
				}
			}
		}
	}],
	listeners: {
		activate: function () {
			Ext.getCmp('announcement_listing').deselect(Ext.getCmp('announcement_listing').getSelectedRecords()[0]);
		}
	}
});