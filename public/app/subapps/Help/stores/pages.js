app.subapps.help.stores.pages = new Ext.data.Store({
	model: 'Pages',
	data: [
  	{name: 'Connectivity', appName: 'help', action: 'connectivity' },
  	{name: 'WebApp FAQ', appName: 'help', action: 'webappfaq', url: "http://blogs.kent.ac.uk/mobiledevices/category/webapp-faq/feed/"},
  	{name: 'Feedback & Support', appName: 'help', action: 'feedback' },
	],
});
