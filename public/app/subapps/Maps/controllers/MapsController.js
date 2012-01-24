app.subapps.maps.controller = Ext.regController('maps',{
	
	lastAction: {
		controller: 'maps',
		action: 'map',
		historyUrl: "/maps/map",
	},
	lastBuildingAction: false,
	lastCampusAction: false,
	before: function(options) {
		
	},
	
	_index: function (options) {
		app.subapps.maps.activate(options.animation);
		//app.views.viewport.setActiveItem('maps',!options.appLaunch ? 'pop' : false);
	},
	
	index: function (options) {
		Ext.dispatch(this.lastAction);
	},
	
	map: function(options) {
		this._index(options);
		Ext.getCmp('maps').setActiveItem('maps_map');
		var map = Ext.getCmp('maps_map_map').map;
		map.setView(new L.LatLng(51.29641026814681, 1.0661029815673828),15);

		Ext.getCmp('maps_map_map').on('locate',function(e) {
			distanceToMedway = distVincenty(e.latlng.lat,e.latlng.lng,51.39775980918021, 0.5403041839599609);

			if (distanceToMedway<17549) {
				map.setView(new L.LatLng(51.39778658449136, 0.5391454696655273),15);
				return;
			}
			distanceToTonbridge = distVincenty(e.latlng.lat,e.latlng.lng,51.19827878319752, 0.2794647216796875);
			if (distanceToTonbridge<10910) {
				map.setView(new L.LatLng(51.192617685626075, 0.2713429927825928),14);
				return;
			}
			distanceToParis = distVincenty(e.latlng.lat,e.latlng.lng,47.204642388766935, 2.52685546875);
			if (distanceToParis<341715) {
				map.setView(new L.LatLng(48.842322257330316, 2.3335647583007812),13);
				return;
			}
			
			distanceToBrussels = distVincenty(e.latlng.lat,e.latlng.lng,50.84063582806037, 4.383544921875);

			if (distanceToBrussels<65122) {
				map.setView(new L.LatLng(50.821377190513005, 4.391827583312988),12);
				return;
			}
		});
		
		this.lastAction = options;
	},
	
	_buildings:  function(options) {
		this._index(options);
		Ext.getCmp('maps').setActiveItem('maps_buildings');
	},
	
	buildings: function(options) {
		this._buildings(options);
		if (!options.backToRoot && this.lastBuildingAction) {
			return Ext.dispatch(this.lastBuildingAction);
		} else {
			this.lastBuildingAction = false;
			return Ext.dispatch({
				controller: 'maps',
				action: 'buildingsList',
				historyUrl: '/maps/buildings/list'
			});
		}
	},
	
	buildingsList: function (options) {
		this._buildings(options);
		Ext.getCmp('maps_buildings').setActiveItem('maps_buildings_list',!options.appLaunch ? {type:'slide', direction:'right'} : false);
		this.lastAction = options;
		this.lastBuildingAction = false;
	},
	
	building: function(options) {
		
		this._buildings(options);
		
		drawBuilding = function() {
			var id = parseInt(options.id),
				building = app.subapps.maps.stores.buildings.getById(id);
			if (building) {
			
				Ext.getCmp('maps_buildings').setActiveItem('maps_buildings_building',!options.appLaunch ? 'slide' : false);
				
				Ext.getCmp('maps_buildings_building_toolbar').setTitle(building.get('name'));
				
				if (this.marker)
					Ext.getCmp('maps_buildings_building_map').map.removeLayer(this.marker);
				Ext.getCmp('maps_buildings_building_map').map.setView(new L.LatLng(building.get('lat'),building.get('lng')),16,true);
				var marker = new L.Marker(new L.LatLng(building.get('lat'),building.get('lng')));
				this.marker = marker;
				
				Ext.getCmp('maps_buildings_building_map').map.addLayer(marker);
				marker.bindPopup("<h4>"+building.data.name+"</h4>").openPopup();

				this.lastAction = options;
			} else {
				Ext.dispatch({
					controller: 'maps',
					action: 'buildings',
					historyUrl: '/maps/buildings',
					backToRoot: true,
					appLaunch: options.appLaunch
				});
			}
		}
		if (!app.subapps.maps.stores.buildings.loaded) {
			app.subapps.maps.stores.buildings.addListener('load',drawBuilding);
		} else {
			drawBuilding();
		}
		this.lastAction = options;
		this.lastBuildingAction = options;

	},
	
	_campuses:  function(options) {
		this._index(options);
		Ext.getCmp('maps').setActiveItem('maps_campuses');
	},
	
	campuses: function(options) {
		this._campuses(options);
		if (!options.backToRoot && this.lastCampusAction) {
			return Ext.dispatch(this.lastCampusAction);
		} else {
			this.lastCampusAction = false;
			return Ext.dispatch({
				controller: 'maps',
				action: 'campusesList',
				historyUrl: '/maps/campuses/list'
			});
		}
	},
	
	
	
	campusesList: function (options) {
		this._campuses(options);
		Ext.getCmp('maps_campuses').setActiveItem('maps_campuses_list',!options.appLaunch ? {type:'slide', direction:'right'} : false);
		this.lastAction = options;
		this.lastCampusAction = false;
	},
	
	campus: function(options) {
		
		this._campuses(options);
		
		drawCampus = function() {
		
			var id = parseInt(options.id),
				campus = app.subapps.maps.stores.campuses.getById(id);
			if (campus) {
			
				Ext.getCmp('maps_campuses').setActiveItem('maps_campuses_campus',!options.appLaunch ? 'slide' : false);
				
				Ext.getCmp('maps_campuses_campus_toolbar').setTitle(campus.get('name'));
				
				if (this.campus_marker)
					Ext.getCmp('maps_campuses_campus_map').map.removeLayer(this.campus_marker);
				Ext.getCmp('maps_campuses_campus_map').map.setView(new L.LatLng(campus.get('lat'),campus.get('lng')),campus.get('zoom'),true);
				var marker = new L.Marker(new L.LatLng(campus.get('lat'),campus.get('lng')));
				this.campus_marker = marker;
				
				Ext.getCmp('maps_campuses_campus_map').map.addLayer(marker);
				marker.bindPopup("<h4>"+campus.get('name')+"</h4>").openPopup();

				this.lastAction = options;
			} else {
				Ext.dispatch({
					controller: 'maps',
					action: 'campuses',
					historyUrl: '/maps/campuses',
					backToRoot: true,
					appLaunch: options.appLaunch
				});
			}
		}
		if (!app.subapps.maps.stores.campuses.loaded) {
			app.subapps.maps.stores.campuses.addListener('load',drawCampus);
		} else {
			drawCampus();
		}
		this.lastAction = options;
		this.lastCampusAction = options;

	},
	
	travel: function(options) {
		Ext.dispatch({
			controller: 'maps',
			action: 'travel_campuses',
			historyUrl: '/maps/travel/campuses',
			appLaunch: options.appLaunch
		});
	},
	
	_travel: function (options) {
		this._index(options);
		Ext.getCmp('maps').setActiveItem('maps_travel');
	},
	
	travelCampuses: function (options) {
		this._travel(options);
		//Ext.getCmp('maps_travel').setActiveItem('maps_travel_campuses',!options.appLaunch ? {type:'slide', direction:'right'} : false);
		this.lastAction = options;
	}
	
	
});