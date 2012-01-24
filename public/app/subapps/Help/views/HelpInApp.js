app.subapps.help.views.HelpInApp = Ext.extend(Ext.Panel, {
	scroll: 'vertical',
	id: 'help_inapp',
	fullscreen: true,
	layout: {
		type: 'vbox',
		align: 'stretch',
		pack: 'start'
	},
	dockedItems: [{
		id: 'help_in_app_toolbar',
		xtype: 'toolbar',
		title: 'Help',
		items: [
			{
				id: 'done',
				text: 'Done',
				listeners: {
					'tap': function () {

						var anim = {type:'slide', direction:'down',reveal: true};
						this.ownerCt.ownerCt.items.items[1].items.items[0].items.items[0].setValue('');
						this.ownerCt.ownerCt.items.items[1].items.items[0].items.items[1].setValue('');
						app.subapps[app.views.viewport.appName].resume(anim);
					}
				}

			}
		]
	}],
	items: [
		new app.subapps.help.views.HelpHelptext(),
		new app.subapps.help.views.HelpForm()
	]
});
