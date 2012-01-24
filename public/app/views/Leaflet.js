/**
 * @class Ext.Leaflet
 * @extends Ext.Component
 */
Ext.Leaflet = Ext.extend(Ext.Component, {
	/**
	 * @cfg {String} baseCls
	 * The base CSS class to apply to the Maps's element (defaults to <code>'x-map'</code>).
	 */
	baseCls: 'x-leaflet',
 
	/**
	 * @cfg {Boolean} useCurrentLocation
	 * Pass in true to center the map based on the geolocation coordinates.
	 */
	useCurrentLocation: false,
	
	monitorResize : true,
 
	/**
	 * @cfg {Object} mapOptions
	 * MapOptions as specified by the Google Documentation:
	 * http://code.google.com/apis/maps/documentation/v3/reference.html
	 */
 
	/**
	 * @type {google.maps.Map}
	 * The wrapped map.
	 */
	map: null,
 
	/**
	 * @type {Ext.util.GeoLocation}
	 */
	geo: null,
 
	/**
	 * @cfg {Boolean} maskMap
	 * Masks the map (Defaults to false)
	 */
	maskMap: false,
	/**
	 * @cfg {Strng} maskMapCls
	 * CSS class to add to the map when maskMap is set to true.
	 */
	maskMapCls: 'x-mask-leaflet',
	
	locate: false,
 
 
	initComponent : function() {
		this.mapOptions = this.mapOptions || {};
		
		this.scroll = false;
		
		
		if(!(window.L || {}).Map){
			this.html = 'Leaflet Maps API is required';
		}
		
		Ext.Leaflet.superclass.initComponent.call(this);
				
		this.addEvents ( 
			/**
			 * @event maprender
			 * @param {Ext.Leaflet} this
			 * @param {google.maps.Map} map The rendered google.map.Map instance
			 */	 
			'maprender',
			'beforelocate',
			'locate'
		);
		
	},
	
	// @private	
	onRender : function(container, position) {
		Ext.Leaflet.superclass.onRender.apply(this, arguments);
		this.el.setVisibilityMode(Ext.Element.OFFSETS);		
	},
	
	 // @private
	afterRender : function() {
		Ext.Leaflet.superclass.afterRender.apply(this, arguments);
		this.renderMap();
	},
	
	// @private
	onResize : function( w, h) {
		Ext.Leaflet.superclass.onResize.apply(this, arguments);
		if (this.map) {
			this.map.invalidateSize();
		}
	},
	
	renderMap : function(){
		var me = this,
			lm = (window.L || {});

		if (lm.Map) {

			Ext.applyIf(me.mapOptions, {
				center: new lm.LatLng(37.381592, -122.135672), // Palo Alto
				zoom: 12,
				attributionControl: false
			});
			
			me.map = new lm.Map(me.el.dom, me.mapOptions);
			
//			var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/'+config.cloudmade_api_key+'/997/256/{z}/{x}/{y}.png',
//			cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18});
			cloudmade = new L.TileLayer.CloudMade(config.cloudmade_api_key);
			me.map.addLayer(cloudmade);

			if(this.locate) {
				me.renderLocate();
			}
			
			me.fireEvent('maprender', me, me.map);
		}
		
	},
	
	renderLocate : function () {
		me = this;
		me.map.locate();
		me.map.on('locationfound', function (e) {
			// london
			// e.latlng = new L.LatLng(51.67255514839676, -0.17578125);
			// france
			// e.latlng = new L.LatLng(47.33882269482199, 1.20849609375);
			// belgium
			//e.latlng = new L.LatLng(51.05520733858494, 5.108642578125);
			// tonbridge
			//e.latlng = new L.LatLng(51.16642774275134, 0.29937744140625);
			// medway
			// e.latlng = new L.LatLng(51.36320660581431, 0.619354248046875);
			me.fireEvent('beforelocate',e);
			var radius = e.accuracy / 2;
			
			if (me.accuracy_circle) 
				me.map.removeLayer(me.accuracy_circle);
			me.accuracy_circle = new L.Circle(e.latlng, radius, {weight: 0,fillOpacity: 0.1});
			me.map.addLayer(me.accuracy_circle);	
			
			var CurrentLocationIcon = L.Icon.extend({
				iconUrl: 'images/current-location.png',
				shadowSize: new L.Point(0, 0),
				iconSize: new L.Point(16, 16),
				iconAnchor: new L.Point(8, 8)
			});

			if (me.location) 
				me.map.removeLayer(me.location);
				
			me.location = new L.Marker(e.latlng, {
				icon: new CurrentLocationIcon()
			});
			me.map.addLayer(me.location);
			me.fireEvent('locate',e);
		});
	},
	
	getState : function(){
		return this.mapOptions;  
	},
	
	// @private	
	onDestroy : function() {
		// @todo clear leaflet eventss
		Ext.Leaflet.superclass.onDestroy.call(this);
	}
});
 
Ext.reg('leaflet', Ext.Leaflet);