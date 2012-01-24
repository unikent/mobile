app.subapps.freePc.views.Campus = Ext.extend(Ext.Panel, {
	layout: 'card',
	listeners: {
		render: function(ct, position) {
			app.subapps.freePc.views['freePc_'+this.campus_id+'_rooms'] = new app.subapps.freePc.views.Rooms({
				id: 'freePc_'+this.campus_id+'_rooms',
				campus_id: this.campus_id
			});
			this.add(app.subapps.freePc.views['freePc_'+this.campus_id+'_rooms']);
			app.subapps.freePc.views['freePc_'+this.campus_id+'_room'] = new app.subapps.freePc.views.Room({
				id: 'freePc_'+this.campus_id+'_room',
				campus_id: this.campus_id
			});
			this.add(app.subapps.freePc.views['freePc_'+this.campus_id+'_room']);
		}
	}
});