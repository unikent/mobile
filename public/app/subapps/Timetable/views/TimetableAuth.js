app.subapps.timetable.views.Auth = Ext.extend(Ext.form.FormPanel,{
	id: 'timetable_auth',
	dockedItems: [{
		id: 'timetable_auth_toolbar',
		xtype: 'subapptoolbar',
		title: "Timetable iCal",
		app: 'timetable'
	}],
	items: [{
		xtype: 'fieldset',
		id: 'timetable_auth_form',
		instructions: 'Please enter your Kent IT account login details to subscribe to your personalised timetable iCal feed.',
		items: [
			{
				id: 'timetable_auth_form_username',
				name: 'timetable_auth_form_username',
				label: 'Username',
				xtype: 'textfield',
			},
			{
				id: 'timetable_auth_form_password',
				name: 'timetable_auth_form_password',
				label: 'Password',
				xtype: 'passwordfield',
			}
		]
	},{
		id: 'timetable_auth_form_button',
		text: 'Submit',
		xtype: 'button',
		listeners: {
		  'tap': function () {
		  	Ext.dispatch({
		  		controller: 'timetable',
		  		action: 'result',
		  		historyUrl: '/timetable/result',
		  		username: timetable_auth.timetable_auth_form_username.value,
		  		password: timetable_auth.timetable_auth_form_password.value,
		  	});
		  }
		}
	}]
});