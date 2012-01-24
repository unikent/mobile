app.regSubApp({
	name: 'appBrowser',
	title: 'Kent App Browser',
	display_in_app_browser: false,
	launch: function () {
		if (!this.launched) {
			this.fireEvent('beforelaunch', this);
			// if the sub app has a viewport add it to the applicaiton

			if (this.views.Viewport !== undefined) {

				type = config.grid_app_browser ? "Grid" : "";
				this.views.viewport = new this.views.Viewport();
				app.views.viewport.add(this.views.viewport);
				app.views.viewport.doLayout();
			}
			this.launched = true;
			this.fireEvent('launched', this);
		}
	}
});



