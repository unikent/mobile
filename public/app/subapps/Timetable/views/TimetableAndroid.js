app.subapps.timetable.views.Android = Ext.extend(app.subapps.timetable.views.Result,{
	id: 'timetable_result',
	bodyPadding: 10,
	tpl: new Ext.XTemplate("<h1>Instructions for Android</h1><p>Some instructions for Android.</p><p>Some instructions for Android.</p><ul><li>Step 1</li><li>Step 2</li></ul><p>Your ical feed is at {ical_url}</p>"),
	items: []
});