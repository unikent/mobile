app.subapps.freePc.views.Viewport = Ext.extend(Ext.TabPanel, {
	id: 'freePc',
	cardSwitchAnimation: false,
	tabBar: {
		dock: 'bottom',
		layout: {pack:'center'},

		listeners: {
			change: function (tabbar,tab,tabcard) {
				Ext.dispatch(tabcard.route);
			}
		}
	},
	listeners: {
		render: function() {
			app.subapps.freePc.views.canterburyCampus = new app.subapps.freePc.views.Campus({
				id: 'freePc_canterbury',
				title: "Canterbury",
				iconCls: 'canterbury',
				campus_id: 'canterbury',
				route: {
					controller: 'freePc',
					action: 'campus',
					campus_id: 'canterbury',
					historyUrl: '/freepc/canterbury/rooms'
				}
			});
			this.add(app.subapps.freePc.views.canterburyCampus);
			/*
app.subapps.freePc.views.medwayCampus = new app.subapps.freePc.views.Campus({
				id: 'freePc_medway',
				title: "Medway",
				iconCls: 'medway',
				campus_id: 'medway',
				route: {
					controller: 'freePc',
					action: 'campus',
					campus_id: 'medway',
					historyUrl: '/freepc/medway/rooms'
				}
			});
			this.add(app.subapps.freePc.views.medwayCampus);
*/
		},
		activate: function() {
			// app.subapps.freePc.controller.refreshInterval = window.setInterval("app.subapps.freePc.controller.refreshData()",12000);
			app.subapps.freePc.controller.refreshData();
		},
		deactivate: function() {
			window.clearInterval(app.subapps.freePc.controller.refreshInterval);
		}
	}
});