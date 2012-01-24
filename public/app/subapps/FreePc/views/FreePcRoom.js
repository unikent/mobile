app.subapps.freePc.views.Room = Ext.extend(Ext.Panel, {
	layout: 'fit',
	listeners: {
		render: function () {
			var campus_id = this.campus_id;
			this.toolbar = new Ext.SubAppToolbar({
				id: 'freePc_room_toolbar',
				title: 'Loading...',
				app: 'freePc',
				items: [{
					ui: 'back',
					text: 'Back',
					handler: function () {
						Ext.dispatch({
							controller: 'freePc',
							action: 'rooms',
							campus_id: campus_id,
							historyUrl: '/freepc/'+campus_id+'/rooms'
						});
					}
				}]
			});
			this.addDocked(this.toolbar);
			this.map = new Ext.Leaflet({
				id: 'freePc_room_map',
				locate: true,
				listeners: {
					locate:  {
						fn: app.subapps.freePc.controller.room_calculate_distance,
						scope: app.subapps.freePc.controller
					}
				}
			});
			this.add(this.map);
		}
	}
});
