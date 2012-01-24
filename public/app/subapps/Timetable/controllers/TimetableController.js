app.subapps.timetable.controller = Ext.regController('timetable',{

	lastAction: {
		controller: 'timetable',
		action: 'auth',
		historyUrl: "/timetable/auth"
	},

		_index: function (options) {
			app.subapps.timetable.activate(options.animation);
		},

		index: function (options) {
			Ext.dispatch(this.lastAction);
		},

		auth: function(options) {
			this._index(options);
			Ext.getCmp('timetable').setActiveItem('timetable_auth');
			this.lastAction = options;
		},

		result: function(options) {
			this._index(options);
			loadMask = new Ext.LoadMask(Ext.getBody(), { id: "timetable_loading", msg:"Loading..."});
			if (options.username === undefined || options.username==="" || options.password === undefined || options.password==="" ) {
				if (!options.appLaunch) {
					Ext.Msg.alert("Username and password required", "Please enter your Kent IT account username and password.");
				}
				return Ext.dispatch({ historyUrl: '/timetable/auth'});
			}
			loadMask.show();

			Ext.Ajax.request({
				url : 'json/timetable/ical.json',
				params : { username : options.username, password : options.password },
				method: 'post',
				success: function (result, request) {
					loadMask.hide();
					var data = Ext.decode(result.responseText);
					if (data.success) {

						Ext.getCmp('timetable').setActiveItem('timetable_result');

						var userAgent = window.navigator.userAgent;
						var isBB = userAgent.search(/blackberry/i) !== -1;
						var isAndroid = userAgent.search(/android/i) !== -1;

						if (isAndroid || isBB) {
							Ext.getCmp('timetable_result').update(data);
						} else {
							button = Ext.getCmp('timetable_result_form_button');
							if (!button.hasListener('tap')) {
								button.on('tap',function () {
									// installed ios apps dont let you open link in safari with javascript (as far as I can tell)
									// so this is a bit of hack...
									myLink = document.createElement('a');
									myLink.setAttribute('href', data.ical_url);
									myLink.setAttribute('target',"_blank");
									var evt = document.createEvent("HTMLEvents");
									evt.initEvent('click', false, true );
									myLink.dispatchEvent(evt);
								});
							}
						}

					} else {
						Ext.Msg.alert(data.title, data.message);
						Ext.dispatch({ historyUrl: '/timetable/auth'});
					}
				},
				failure: function (result, request) {
					loadMask.hide();
					Ext.Msg.alert("Couldn't contact server", "Sorry we were unable to connect to the server please try again later.");
					Ext.dispatch({ historyUrl: '/timetable/auth'});
				}
			});
			// Ext.getCmp('timetable').setActiveItem('timetable_loading');
		}


});