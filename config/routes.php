<?php

dispatch("/",array("AppBrowser","index"));
dispatch("/feedback",array("AppBrowser","feedback"));
dispatch_post("/feedback",array("AppBrowser","feedback"));
dispatch("/feedbackRemote",array("AppBrowser","feedbackRemote"));
dispatch_post("/feedbackRemote",array("AppBrowser","feedbackRemote"));


dispatch("/pc-availability",array("FreePC","index"));
dispatch("/pc-availability.json",array("FreePC","json"));
dispatch("/pc-availability/map/:id",array("FreePC","map"));

dispatch("/maps",array("Maps","index"));
dispatch("/maps/buildings.json",array("Maps","buildings"));
dispatch("/maps/building/:id",array('Maps','buildingMap'));

dispatch("/timetable",array("ICal","index"));
dispatch("/timetable/ical",array("ICal","ical"));
dispatch_post("/timetable/ical",array("ICal","ical"));
dispatch_post("/timetable/ical.json",array("ICal","json"));

dispatch("/configurations",array("Configurations","index"));
dispatch("/configurations/show/",array("Configurations","show"));
dispatch("/configurations/show/:type",array("Configurations","show"));