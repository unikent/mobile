Ext.SubAppToolbar = Ext.extend(Ext.Toolbar,{

	listeners : {

		render: function(ct, position){
			if (!this.items.length) {
				this.add({
					cls: "home",
					text: "<div class='content'></div>",
					handler: function() {
						Ext.dispatch({
							controller: 'appBrowser',
							action: 'index',
							historyUrl: '/'
						});
					}
				});
			}

			this.add({
				xtype: 'spacer'
			});

			if (ct.app != 'help' && ct.app !== undefined) {
				this.add({
					cls: "help",
					text: "<div class='content'></div>",
					handler: function() {
						Ext.dispatch({
							controller: 'help',
							action: 'inApp',
							app: ct.app,
							historyUrl: '/help/'+ct.app
						});
					}
				});
			}
		}
	}

});

Ext.reg('subapptoolbar', Ext.SubAppToolbar);