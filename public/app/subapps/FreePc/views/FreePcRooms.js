app.subapps.freePc.views.Rooms = Ext.extend(Ext.Panel, {
	layout: 'fit',
	listeners : {
		render: function(ct, position) {
			var campus_id = this.campus_id;
			app.subapps.freePc.views['freePc_'+this.campus_id+'_rooms_list'] = new Ext.List({
				id: 'freePc_'+this.campus_id+'_rooms_list',
				xtype: 'list',
				itemTpl: '<tpl if="opens"><a href="http://www.kent.ac.uk/library/templeman/opening.html"><span class="opens">{opens}</span><span class="closes">{closes}</span></a></tpl><tpl if="!opens"><tpl<tpl if="lat"><div class="arrow"></div></tpl><p class="free-pcs">{free}</p><h4>{name}</h4><h5>{free}/{total} free PCs<tpl if="distance">, {distance}m away</tpl></h5></tpl>',
				grouped: true,
				itemCls: 'pcroom-list-item<tpl if="opens"> pcroom-list-item-opening</tpl>',
				store: app.subapps.freePc.stores[this.campus_id+'PcRooms'],
				loadingText: false,
				listeners: {
					beforerender: function() {
						// This is a bit of hack to get library times in the list view but it the only viable option as I see it
						if (campus_id == 'canterbury') {
							this.tpl = '<div class="x-list-item pcroom-list-item pcroom-list-item-disclaimer"><div class="x-list-item-body"><a href="http://blogs.kent.ac.uk/mobiledevices/2012/01/11/pc-may-be-free-but-the-room-may-not-be">PCs may be free but the room may not be.</a></div></div><tpl for="."><div class="x-list-group x-group-{id}"><h3 class="x-list-header">{group}</h3><div class="x-list-group-items">{items}</div></div></tpl>';
						}
					},
					selectionchange: function (selectionModel, selection) {
						if (selection[0]) {
							if (selection[0].get('lat') && selection[0].get('lat')) {
								Ext.dispatch({
									controller: 'freePc',
									action: 'room',
									campus_id: campus_id,
									id: selection[0].get('id'),
									historyUrl: "/freepc/"+campus_id+"/room/"+selection[0].get('id')
								});
							} else {
								this.deselect(selection[0]);
							}
						}
					}
				}
			});
			this.add(app.subapps.freePc.views['freePc_'+this.campus_id+'_rooms_list']);
			this.addDocked(new Ext.SubAppToolbar({
				xtype: 'subapptoolbar',
				title: 'PC Availability',
				app: 'freePc'
			}));
		},
		activate: function () {
			Ext.getCmp('freePc_'+this.campus_id+'_rooms_list').deselect(Ext.getCmp('freePc_'+this.campus_id+'_rooms_list').getSelectedRecords()[0]);
		}
	}
});
