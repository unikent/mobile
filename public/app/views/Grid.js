Ext.Grid = Ext.extend(Ext.List, {
	componentCls: 'x-grid',
	itemSelector: '.x-grid-item',
	iconText: 'title',
	iconCls: 'name',
	scroll: false,
	itemTpl: null,
	layout: 'vbox',
	initComponent : function() {

		var memberFnsCombo = {};

		if (Ext.isArray(this.itemTpl)) {
			this.itemTpl = this.itemTpl.join('');
		} else if (this.itemTpl && this.itemTpl.html) {
			Ext.apply(memberFnsCombo, this.itemTpl.initialConfig);
			this.itemTpl = this.itemTpl.html;
		}

		if (!this.itemTpl) {
			this.itemTpl = '<tpl if="itemCls==\'external\'"><tpl if="!html"><a href="{href}" target="{target}" rel="external"></tpl></tpl><div class="x-grid-item-body-icon {'+this.iconCls+'}"><tpl if="itemCls==\'external\'"><div class="external-icon"></div></tpl></div><div class="x-grid-item-body-text">{'+this.iconText+'}</div><tpl if="itemCls==\'external\'"><tpl if="!html"></a></tpl></tpl>';
		}

		this.tpl = '<tpl for="."><div class="x-grid-item ' + this.itemCls + '"><div class="x-grid-item-body">' + this.itemTpl + '</div>';
		if (this.onItemDisclosure) {
			this.tpl += '<div class="x-list-disclosure"></div>';
		}
		this.tpl += '</div></tpl>';
		this.tpl = new Ext.XTemplate(this.tpl, memberFnsCombo);


		if (this.grouped) {

			this.listItemTpl = this.tpl;
			if (Ext.isString(this.listItemTpl) || Ext.isArray(this.listItemTpl)) {
				// memberFns will go away after removal of tpl configuration for itemTpl
				// this copies memberFns by storing the original configuration.
				this.listItemTpl = new Ext.XTemplate(this.listItemTpl, memberFnsCombo);
			}
			if (Ext.isString(this.groupTpl) || Ext.isArray(this.groupTpl)) {
				this.tpl = new Ext.XTemplate(this.groupTpl);
			}
		}
		else {
			this.indexBar = false;
		}

		// if (this.enableAutoPaging) {
		//	 this.enablePaging = true;
		// }

		Ext.List.superclass.initComponent.call(this);

		if (this.onItemDisclosure) {
			// disclosure can be a function that will be called when
			// you tap the disclosure button
			if (Ext.isFunction(this.onItemDisclosure)) {
				this.onItemDisclosure = {
					scope: this,
					handler: this.onItemDisclosure
				};
			}
		}

		this.on('deactivate', this.onDeactivate, this);

		this.addEvents(
			 /**
			  * @event disclose
			  * Fires when the user taps the disclosure icon on an item
			  * @param {Ext.data.Record} record The record associated with the item
			  * @param {Ext.Element} node The wrapping element of this node
			  * @param {Number} index The index of this list item
			  * @param {Ext.util.Event} e The tap event that caused this disclose to fire
			  */
			 'disclose',

			 /**
			  * @event update
			  * Fires whenever the contents of the List is updated.
			  * @param {Ext.List} list This list
			  */
			 'update'
		 );
	},
});