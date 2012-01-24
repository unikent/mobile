Ext.NestedListWithHtmlLeaf = Ext.extend(Ext.NestedList,{
	initComponent : function() {
		//
		if (Ext.isDefined(this.clearSelectionDefer)) {
			console.warn("NestedList: clearSelectionDefer has been removed. Please use clearSelectionDelay.");
			this.clearSelectionDelay = this.clearSelectionDefer;
		}
		
		if (Ext.isDefined(this.disclosure)) {
			console.warn("NestedList: disclosure has been removed. Please use onItemDisclosure");
			this.onItemDisclosure = this.disclosure;
		}
		//
		
		var store	= Ext.StoreMgr.lookup(this.store),
			rootNode = store.getRootNode(),
			title	= rootNode.getRecord() ? this.renderTitleText(rootNode) : this.title || '';

		this.store = store;

		if (this.useToolbar) {
			// Add the back button
			this.backButton = new Ext.Button({
				text: this.backText,
				ui: 'back',
				handler: this.onBackTap,
				scope: this,
				// First stack doesn't show back
				hidden: true
			});
			
			this.homeButton = new Ext.Button({
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
			
			if (!this.toolbar || !this.toolbar.isComponent) {
				
				/**
				 * @cfg {Object} toolbar
				 * Configuration for the Ext.Toolbar that is created within the Ext.NestedList.
				 */
				this.toolbar = Ext.apply({}, this.toolbar || {}, {
					dock: 'top',
					xtype: 'toolbar',
					ui: 'dark',
					title: title,
					items: []
				});
				this.toolbar.items.unshift(this.backButton);
				this.toolbar.items.unshift(this.homeButton);
				this.toolbar = new Ext.SubAppToolbar(this.toolbar);

				this.dockedItems = this.dockedItems || [];
				this.dockedItems.push(this.toolbar);
			} else {
				this.toolbar.insert(0, this.backButton);
			}
		}

		this.items = [this.getSubList(rootNode)];

		Ext.NestedList.superclass.initComponent.call(this);
		this.on('itemtap', this.onItemTap, this);


		this.addEvents(
			
			/**
			 * @event itemtap
			 * Fires when a node is tapped on
			 * @param {Ext.List} list The Ext.List that is currently active
			 * @param {Number} index The index of the item that was tapped
			 * @param {Ext.Element} item The item element
			 * @param {Ext.EventObject} e The event object
			 */

			
			/**
 			 * @event itemdoubletap
 			 * Fires when a node is double tapped on
 			 * @param {Ext.List} list The Ext.List that is currently active
 			 * @param {Number} index The index of the item that was tapped
 			 * @param {Ext.Element} item The item element
 			 * @param {Ext.EventObject} e The event object
 			 */

			
			/**
			 * @event containertap
			 * Fires when a tap occurs and it is not on a template node.
			 * @param {Ext.List} list The Ext.List that is currently active
			 * @param {Ext.EventObject} e The raw event object
			 */

			
			/**
 			 * @event selectionchange
 			 * Fires when the selected nodes change.
 			 * @param {Ext.List} list The Ext.List that is currently active
 			 * @param {Array} selections Array of the selected nodes
 			 */

			
			/**
			 * @event beforeselect
			 * Fires before a selection is made. If any handlers return false, the selection is cancelled.
			 * @param {Ext.List} list The Ext.List that is currently active
			 * @param {HTMLElement} node The node to be selected
			 * @param {Array} selections Array of currently selected nodes
			 */

			// new events.
			
			/**
			 * @event listchange
			 * Fires when the user taps a list item
			 * @param {Ext.NestedList} this
			 * @param {Object} listitem
			 */
 		'listchange',

			
			/**
			 * @event leafitemtap
			 * Fires when the user taps a leaf list item
			 * @param {Ext.List} subList The subList the item is on
			 * @param {Number} subIdx The id of the item tapped
			 * @param {Ext.Element} el The element of the item tapped
			 * @param {Ext.EventObject} e The event
			 * @param {Ext.Panel} card The next card to be shown
			 */
			'leafitemtap'
		);
	},
	
	syncToolbar: function(card) {
		var list		  = card || this.getActiveItem(),
			depth		 = this.items.indexOf(list),
			recordNode	= list.recordNode,
			parentNode	= recordNode ? recordNode.parentNode : null,
			backBtn	   = this.backButton,
			homeBtn	   = this.homeButton,
			backBtnText   = this.useTitleAsBackText && parentNode ? this.renderTitleText(parentNode) : this.backText,
			backToggleMth = (depth !== 0) ? 'show' : 'hide';
			homeToggleMth = (depth !== 0) ? 'hide' : 'show';
			
			if (backBtn) {
				backBtn[backToggleMth]();
				if (parentNode) {
					backBtn.setText(backBtnText);
				}
			}
			if (homeBtn) {
				homeBtn[homeToggleMth]();
			}

			if (this.toolbar && this.updateTitleText) {
				this.toolbar.setTitle(recordNode && recordNode.getRecord() ? this.renderTitleText(recordNode) : this.title || '');
				this.toolbar.doLayout();
			}
	},
	
	getItemTextTpl: function(node) {
		return '<div class="arrow"></div>{' + this.displayField + '}';
	},
	
	getDetailCard: function (record) {
		return new Ext.Panel({
			scroll: 'vertical',
			cls: 'nested-list-leaf', 
			html: record.getRecord().get(this.leafBodyField),
			bodyPadding: '10px',
			recordNode: record
		});
	}
});