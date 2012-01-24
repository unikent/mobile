app.subapps.appBrowser.views.Viewport = Ext.extend(Ext.Panel, {
	id: 'appBrowserGrid',
	fullscreen: true,
	layout: 'card',
	dockedItems: [
		{
			xtype: "toolbar",
			cls: "home-toolbar2",
			html: "<div class='logo'></div>"
		}
	],
	items: [{
		bodyPadding: "9px",
		scroll: true,
		listeners: {
			render: function () {

				var store = new Ext.data.JsonStore({
					model	: 'SubApp',
					data: app.subapp_models
				});

				store.filterBy(function (record,id) { return record.data.display_in_app_browser; });

				this.list = new Ext.Grid({
					store: store,
					itemCls : "{itemCls}",
					iconText: 'iconTitle',
					listeners: {
						selectionchange: {
							fn: function(selectionModel,selection) {
								if (selection[0]) {

									if (selection[0].get('app').controller && selection[0].get('app').controller.lastAction) {
										Ext.dispatch(Ext.apply(selection[0].get('app').controller.lastAction,{animation: 'pop'}));
									} else if (selection[0].get('app').activate) {
										selection[0].get('app').activate();
									}

									if (selection[0].get('launcher')) {
										app.subapps.appBrowser.views.viewport.list.deselect(app.subapps.appBrowser.views.viewport.list.getSelectedRecords()[0]);
									}

								}
							}
						}
					}
				});

				this.add(this.list);

				var launcherStore = new Ext.data.JsonStore({
					model	: 'SubApp',
					data: app.subapp_launcher_models
				});

				launcherStore.filterBy(function (record,id) { return record.data.display_in_app_browser; });

				this.launcherList = new Ext.Grid({
					store: launcherStore,
					itemCls : "{itemCls}",
					iconText: 'iconTitle',
					scroll: false,
					cls: "launcher-grid",
					listeners: {
						selectionchange: {
							fn: function(selectionModel,selection) {
								if (selection[0]) {

									// Launch launcher text window
									if (app.subapps.appBrowser.views.launcherWarning === undefined) {
										app.subapps.appBrowser.views.launcher = new app.subapps.appBrowser.views.LauncherWarning();
										app.views.viewport.add(app.subapps.appBrowser.views.launcher);
									}

									app.subapps.appBrowser.views.launcher.getDockedComponent(0).setTitle(selection[0].get('iconTitle'));
									app.subapps.appBrowser.views.launcher.getComponent(0).update(selection[0].get('html'));
									app.subapps.appBrowser.views.launcher.getComponent(1).setUrl(selection[0].get('href'));
									app.subapps.appBrowser.views.launcher.getComponent(1).setText(selection[0].get('title'));
									app.views.viewport.setActiveItem(app.subapps.appBrowser.views.launcher);

								}
							}
						}
					}
				});

				this.add(this.launcherList);

				Ext.select('body').setStyle('background','#333');

			}
		}
	}]
});