app.subapps.freePc.controller = Ext.regController('freePc',{

	lastAction: {
		controller: 'freePc',
		action: 'campus',
		campus_id: 'canterbury',
		historyUrl: "/freepc/canterbury"
	},

	_index: function (options) {
		app.subapps.freePc.activate(options.animation);
		//app.views.viewport.setActiveItem('freePc',!options.appLaunch ? 'pop' : false);
	},

	libraryOpening: false,

	index: function (options) {
		Ext.dispatch(this.lastAction);
	},

	_campus: function (options) {
		this._index(options);
		Ext.getCmp('freePc').setActiveItem('freePc_'+options.campus_id,false);
	},

	campus: function (options) {
		Ext.dispatch({
			controller: 'freePc',
			action: 'rooms',
			campus_id: options.campus_id,
			animate: false,
			historyUrl: "/freepc/"+options.campus_id+"/rooms"
		});
		app.subapps.freePc.stores[options.campus_id+'PcRooms'].load();
	},

	rooms: function (options) {
		this._campus(options);
		var controller = this;
		Ext.getCmp('freePc_'+options.campus_id).setActiveItem('freePc_'+options.campus_id+'_rooms',!options.appLaunch && options.animate !== false ? {type: 'slide',direction: 'right'} : false);
		this.lastAction = options;
	},

	room: function (options) {

		this._index(options);
		var me = this;
		var drawRoom = function() {
			var id = parseInt(options.id,10),
				room = app.subapps.freePc.stores[options.campus_id+'PcRooms'].getById(id);
			if (room) {

				me.current_room = room;

				Ext.getCmp('freePc_'+options.campus_id).setActiveItem('freePc_'+options.campus_id+'_room',!options.appLaunch ? 'slide' : false);

				Ext.getCmp('freePc_'+options.campus_id+'_room').toolbar.setTitle(room.get('name'));

				var map = Ext.getCmp('freePc_'+options.campus_id+'_room').map.map;

				if (me.marker)
					map.removeLayer(me.marker);

				map.setView(new L.LatLng(room.get('lat'),room.get('lng')),16,true);
				var marker = new L.Marker(new L.LatLng(room.get('lat'),room.get('lng')));
				me.marker = marker;
				//marker.setLatLng();
				map.addLayer(marker);

				marker.bindPopup("<h4>"+room.get('name')+"</h4><p>"+room.get('free')+"/"+room.get('total')+" PCs available</p><p id='freePc_room_map_distance'></p>").openPopup();

				map.locate();

				me.lastAction = options;

			} else {
				Ext.dispatch({
					controller: 'freePc',
					action: 'canterbury',
					historyUrl: '/freepc/canterbury',
					appLaunch: options.appLaunch
				});
			}
		};

		if (!app.subapps.freePc.stores[options.campus_id+'PcRooms'].loaded) {
			app.subapps.freePc.stores.pcRooms.addListener('load',drawRoom);
		} else {
			drawRoom();
		}

		this.lastAction = options;

	},

	room_calculate_distance: function (e) {
		Ext.get('freePc_room_map_distance').update(parseInt(distVincenty(e.latlng.lat,e.latlng.lng,this.current_room.get('lat'),this.current_room.get('lng')),10)+"m away");
	},

	refreshData: function () {
		app.subapps.freePc.stores['canterburyPcRooms'].read();
	}

});