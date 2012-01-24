// app.subapps.appBrowser.views.Viewport = Ext.extend(Ext.Panel, {
//	id: 'appBrowser',
//	layout: 'fit',
//	cardSwitchAnimation: 'slide',
//	dockedItems: [
//		{
//			xtype: "toolbar",
//			cls: "home-toolbar"
//		}
//	],
//	listeners: {
//		render: function () {
//			var store = new Ext.data.JsonStore({
//				model  : 'SubApp',
//				data: app.subapp_models
//			});

//			store.filterBy(function (record,id) { return record.data.display_in_app_browser; });

//			this.list = new Ext.List({
//				itemTpl : '<tpl if="itemCls==\'external\'"><a href="{href}" target="{target}" rel="external"><div class="icon"></div></tpl>{title}</a>',
//				store: store,
//				itemCls : "{itemCls}",
//				listeners: {
//					selectionchange: {
//						fn: function(selectionModel,selection) {

//							if (selection[0]) {

//								if (selection[0].get('app').controller && selection[0].get('app').controller.lastAction) {
//									Ext.dispatch(Ext.apply(selection[0].get('app').controller.lastAction,{animation: 'pop'}));
//								} else if (selection[0].get('app').activate) {
//									selection[0].get('app').activate();
//								}

//								if (selection[0].get('launcher')) {
//									app.subapps.appBrowser.views.viewport.list.deselect(app.subapps.appBrowser.views.viewport.list.getSelectedRecords()[0]);
//								}

//							}
//						}
//					}
//				}
//			});

//			this.add(this.list);
//			Ext.select('body').setStyle('background','#333');

//		}
//	}
// });

// app.subapps.appBrowser.test = "foo";