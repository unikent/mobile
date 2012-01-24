
// Give buttons to ability to link to external urls
Ext.LinkButton = Ext.extend(Ext.Button, {
  onPress: function (e) {
    var me = this;
    console.log(me.url);
    if (!me.disabled && this.fireEvent('beforetap') !== false) {
      setTimeout(function() {
        if (!me.preventCancel) {
          me.onTapCancel();
        }
        me.callHandler(e);
        me.fireEvent('tap', me, e);
        if (me.url !== undefined) {
          var myLink = document.createElement('a');
          myLink.setAttribute('href', me.url);
          myLink.setAttribute('target',"_blank");
          var evt = document.createEvent("HTMLEvents");
          evt.initEvent('click', false, true );
          myLink.dispatchEvent(evt);
        }
      }, 10);
    }
  },
  setUrl: function(url) {
    this.url = url;
  }
});

Ext.reg('linkbutton', Ext.LinkButton);