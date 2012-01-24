app.subapps.help.views.HelpForm = Ext.extend(Ext.form.FormPanel, {
	items: [{
		xtype: 'fieldset',
		title: 'Send us your feedback',
		instructions: 'The Kent Mobile app is under active development and we\'re keen to get your feedback.',
		items: [
			{
				name: 'email',
				label: 'Email',
				xtype: 'emailfield',
			},
			{
				name: 'message',
				label: 'Message',
				xtype: 'textareafield',
			}
		],
	},{
		id: 'helpform_button',
		text: 'Submit',
		xtype: 'button',
		listeners: {
			'tap': function () {
				Ext.dispatch({
					controller: 'help',
					action: 'submit',
					formUrl: '/help/'+app.views.viewport.appName,
					appName: app.views.viewport.appName,
					actionName: app.subapps[app.views.viewport.appName].controller.lastAction.action,
					appUrl: app.subapps[app.views.viewport.appName].controller.lastAction.historyUrl,
					emailField: this.ownerCt.items.items[0].items.items[0],
					messageField: this.ownerCt.items.items[0].items.items[1]
				});
			}
		}
	}],
});
