Ext.regModel('Launcher', {
	fields: [
		'name',
		'title',
		{name: 'display_in_app_browser',type:'boolean',defaultValue: true},
		'app',
		'itemCls',
		'html',
		{name: 'launcher',type:'boolean',defaultValue: true}
	]
});

Ext.Launcher = Ext.extend(Ext.Controller,{
	launched: false,
	constructor: function (config) {
		this.init();
		Ext.SubApp.superclass.constructor.call(this, config);
	},
	init: function () {}
});
