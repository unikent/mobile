app.subapps.gettingStarted.views.home = Ext.extend(Ext.Panel, {
	scroll: 'vertical',
	layout: 'fit',
	id: 'getting_started_home',
	bodyPadding: "10px",
	fullscreen: true,
	dockedItems: [{
		id: 'getting_started_home_toolbar',
		app: 'gettingStarted',
		xtype: 'subapptoolbar',
		title: 'Getting started',
	}],
	html: '',
});