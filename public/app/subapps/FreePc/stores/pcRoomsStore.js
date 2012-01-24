createCampusPcRoomStore = function(campus) {
	var campus = campus;
	app.subapps.freePc.stores[campus+'PcRooms'] = new Ext.data.JsonStore({
		model  : 'PcRoom',
		sorters: 'name',
		getGroupString : function(record) {
			return record.get('group');
		},
		proxy: {
			type: 'ajax',
			url : 'json/pc-availability.json?campus='+campus,
			reader: {
				type: 'json',
				root: 'pcRooms'
			}
		},
		loaded: false,
		autoLoad: false,
		listeners: {
			load: function() {
				this.calculateDistances();
				this.loaded = true;
			}
		},
		calculateDistances: function () {
			map = new L.Map(document.createElement('div'));
			var me = this;
			map.on('locationfound',function (e) {
				me.each(function (room) {
					if (room.get('lat') && room.get('lng')) {
						room.set('distance',parseInt(distVincenty(e.latlng.lat,e.latlng.lng,room.get('lat'),room.get('lng'))));
					}
				});
				if (list = Ext.getCmp('freePc_'+campus+'_rooms_list')) {
					list.doComponentLayout();
				}
				
			});
			map.locate();
		}
	});
}
createCampusPcRoomStore('canterbury');
createCampusPcRoomStore('medway');
