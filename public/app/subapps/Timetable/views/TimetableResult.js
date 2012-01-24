app.subapps.timetable.views.Result = Ext.extend(Ext.Panel,{
	id: 'timetable_result',
	style: {background: "#eee"},
	dockedItems: [{
		id: 'timetable_result_toolbar',
		xtype: 'subapptoolbar',
		title: "Timetable iCal",
		app: 'timetable',
		items: [{
			ui: 'back',
			text: 'Back',
			handler: function () {
				Ext.dispatch({
					controller: 'timetable',
					action: 'auth',
					historyUrl: '/timetable/auth'
				});
			}
		}]
	}],
	items: [{
		xtype: 'form',
		id: 'timetable_result_form',
		items: [{
			xtype: 'fieldset',
			instructions: "<p>Pressing this button will add your timetable to your device's default calendar app. How often this is updated will depend on your device's settings.</p><p>Timetable feeds are provided by the timetabling office, for more information please <a href='http://www.kent.ac.uk/timetabling/icalendar' target='_blank'>visit the Timetabling Office website</a>.</p>",
			items: [{
				id: 'timetable_result_form_button',
				text: 'Timetable iCal Feed',
				xtype: 'button'
			}]
		}]
	}]
});