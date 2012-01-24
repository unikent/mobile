app.subapps.timetable.views.Viewport = Ext.extend(Ext.Panel, {
	id: "timetable",
	layout: "card",
	listeners: {
		render: function() {
      var userAgent = window.navigator.userAgent;
      var isBB = userAgent.search(/blackberry/i) !== -1;
      var isAndroid = userAgent.search(/android/i) !== -1;

			this.add(new app.subapps.timetable.views.Auth());

			if (isBB) {
				this.add(new app.subapps.timetable.views.BB());
			} else if (isAndroid) {
				this.add(new app.subapps.timetable.views.Android());
			} else {
				this.add(new app.subapps.timetable.views.Result());
			}

		}
	}

});