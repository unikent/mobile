app.subapps.help.views.HelpFeedback = Ext.extend(Ext.Panel, {
	id: 'help_feedback',
	layout: 'fit',
	dockedItems: [{
		id: 'help_feedback_toolbar',
		app: 'help',
		xtype: 'subapptoolbar',
		title: 'Feedback & Support',
		items: [{
			ui: 'back',
			text: 'Help',
			handler: function () {
				Ext.dispatch({
					controller: 'help',
					action: 'home',
					historyUrl: '/help/home',
					backToRoot: true
				});
			}
		}]
	}],
	items: [
		new app.subapps.help.views.HelpForm()
	]
});
