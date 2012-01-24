//Note the # in the url examples below
Ext.Router.draw(function(map) {

	//fallback route - would match routes like http://mydomain.com/#users/list to the 'users' controller's
	//'list' action

	map.connect('/',{controller:'appBrowser',action:'index'});
	map.connect('',{controller:'appBrowser',action:'index'});

	map.connect('/maps',{controller:'maps',action:'index'});
	map.connect('/maps/map',{controller:'maps',action:'map'});
	map.connect('/maps/buildings',{controller:'maps',action:'buildings'});
	map.connect('/maps/buildings/list',{controller:'maps',action:'buildingsList',backToRoot:true});
	map.connect('/maps/building/:id',{controller:'maps',action:'building'});
	map.connect('/maps/campuses',{controller:'maps',action:'campuses'});
	map.connect('/maps/campuses/list',{controller:'maps',action:'campusesList',backToRoot:true});
	map.connect('/maps/campus/:id',{controller:'maps',action:'campus'});
	map.connect('/maps/travel',{controller:'maps',action:'travel'});
	map.connect('/maps/travel/campuses',{controller:'maps',action:'travelCampuses'});
	map.connect('/maps/travel/campus/:campus',{controller:'maps',action:'travelCampus'});
	map.connect('/maps/travel/campus/:campus/:method',{controller:'maps',action:'travelMethod'});

	map.connect('/freepc',{controller:'freePc',action:'index'});
	map.connect('/freepc/:campus_id',{controller:'freePc',action:'campus'});
	map.connect('/freepc/:campus_id/rooms',{controller:'freePc',action:'campus'});
	map.connect('/freepc/:campus_id/room/:id',{controller:'freePc',action:'room'});

	map.connect('/timetable',{controller:'timetable',action:'index'});
	map.connect('/timetable/auth',{controller:'timetable',action:'auth'});
	map.connect('/timetable/result',{controller:'timetable',action:'result'});

	map.connect('/help',{controller:'help',action:'index'});
	map.connect('/help/home',{controller:'help',action:'home'});
	map.connect('/help/webappfaq',{controller:'help',action:'webappfaq'});
	map.connect('/help/webappfaq/:index',{controller:'help',action:'webapp_reload'});


	map.connect('/help/connectivity',{controller:'help',action:'connectivity'});
	map.connect('/help/connectivity/device/:id/:index',{controller:'help',action:'details_reload'});
	map.connect('/help/connectivity/device/:id',{controller:'help',action:'device'});
	map.connect('/help/feedback',{controller:'help',action:'feedback'});
	map.connect('/help/:app',{controller:'help',action:'inApp'});

	map.connect('/travel',{controller:'travel',action:'index'});
	map.connect('/travel/home',{controller:'travel',action:'home'});

	map.connect('/social',{controller:'Social',action:'index'});


	map.connect('/news',{controller:'Announcement',action:'list'});
	map.connect('/news/view/:index',{controller:'Announcement',action:'view'});

	map.connect(':controller/:action');

});