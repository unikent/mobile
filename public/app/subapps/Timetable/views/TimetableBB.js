app.subapps.timetable.views.BB = Ext.extend(app.subapps.timetable.views.Result,{
	id: 'timetable_result',
	bodyPadding: 10,
	tpl: new Ext.XTemplate("<h1>Instructions for Blackberry</h1><p>Some instructions for Blackberry.</p><p>Some instructions for BB.</p><p>Your ical feed is at {ical_url}</p>"),
	items: []
});