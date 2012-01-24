app.subapps.appBrowser.views.LauncherWarning = Ext.extend(Ext.Panel, {
	fullscreen: true,
	layout: 'auto',
	bodyPadding: 10,
	scroll: "verticle",
	dockedItems: [
		{
			xtype: "subapptoolbar",
			title: "Title"
		}
	],
	items: [
		{html: "http://www.kent.ac.uk"},
		{
			xtype: 'linkbutton',
			text: "Launch",
			url: "http://www.kent.ac.uk",
			style: "margin-top: 20px;margin-bottom: 20px;"
		},
		{html: "<p>Please let us know what services you would like to see made available by using the Feedback button or emailing <a href='mailto:helpdesk@kent.ac.uk'>helpdesk@kent.ac.uk</a></p>"}
	]
});